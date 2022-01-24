// @ts-nocheck
import React, { Component } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import Footer from '../Footer/Footer'
import { nanoid } from 'nanoid'
import storage from '../../utils/storage'
import './TodoModel.css'

export default class TodoModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      done: false,// done为true则表明所有任务都完成了 勾选所有任务，全选按钮变色
      complete: false,// complete为false则表明一个任务都没有完成 clear completed隐藏
      shift: 'all',// shift用来切换渲染的任务列表
    }
  }

  // 初始化
  componentDidMount() {
    // 获取缓存的数据
    const cacheTodos = storage.get("TodoList");
    const currentShift = storage.getParams("shift")
    const isAllDone = cacheTodos.every((todoObj) => 
      todoObj.isActive === false
    )

    const isAnyCompleted = cacheTodos.some((todoObj) => 
      todoObj.isActive === false
    )

    this.setState({
      todoList: cacheTodos,
      done: isAllDone,
      shift: currentShift,
      complete: isAnyCompleted,
    })

    // 组件挂载后添加监听器
    window.addEventListener('beforeunload', this.beforeunload)
  }

  // 组件销毁后移除监听器
  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.beforeunload)
  }

  // 应用销毁后的回调函数
  // TODO: 踩坑标识——这里最忘记使用箭头函数了 作用域错误导致无法获取this.state！
  // cannot destructure property 'todoList' of 'this.state' as it is undefined —— 作用域的问题 不要再犯了！
  beforeunload = (e) => {
    // TODO: 
    const { todoList } = this.state;
    storage.set("TodoList", todoList);

    // 下面的代码可以在刷新页面之前弹出确认窗口
    // let unloadMsg = "";
    // e.preventDefault();
    // (e || window.event).returnValue = unloadMsg;
    // return unloadMsg;
  }

  // 用了这个钩子实现了组件更新过程中将缓存更新 监听render之后 更新了DOM的那个状态
  // 每次渲染页面就更新一下缓存 就相当于是在所有回调函数里更新缓存了——这样效率低 不建议这么更新缓存 
  // componentDidUpdate() {
  //   // FIXME: 打断点发现这个钩子每次更新是调用两次 emm 能用就行
  //   // debugger;
  //   const { todoList } = this.state;
  //   storage.set("TodoList", todoList);
  //   return true;
  // }

  // 新增一个todoItem
  /**
   * state.todo.push({ id, name, isActive }) 
   * @param name string
   */
  addTodo = (todoObj) => {
    const { todoList } = this.state;

    /**
     *  const todoObj = { id, name, isActive: true }
     *  todoList.push(todoObj)
     *  this.setState({ todoList })
     */
    const newtodoList = [...todoList, todoObj]
    this.setState({
      todoList: newtodoList,
      done: false,
    })
  }

  // 改变todoItem的完成情况
  /***
   * @params id 
   */
  changeState = (id) => {
    const { todoList } = this.state;

    // 更改单个Item的状态
    const newtodoList = todoList.map((todoObj) => {
      if (todoObj.id === id) {
        todoObj.isActive = todoObj.isActive ? false : true;
        console.log("改变任务状态为active-", todoObj.isActive)
      }
      return todoObj;
    })

    // 每勾选一个任务都要判断是否所有任务都complete(不active)了
    const isAllDone = todoList.every((todoObj) => 
      todoObj.isActive === false
    )
    // console.log("是否全部完成-", isAllDone)

    // 每勾选一个任务都要判断是否当前列表没有任何complete
    const isAllCompleted = todoList.some((todoObj) => 
      todoObj.isActive === false
    )

    this.setState({
      todoList: newtodoList,
      done: isAllDone,
      complete: isAllCompleted,
    })
  }

  /** 
   * 全选todoItems 修改其完成情况
   * TODO: 明亮的踩坑提示：使用了isActive作为判断标准但是没有认识清楚active的意义，在这里更新时出现逻辑不合理的地方！
   * 写稍微复杂一些的代码时要保证开始之前对所有数据之间的关系&具体功能特别清楚！ 
   * 像这里：state为true：全complete；state为false：全active 所以更新isActive属性时要赋一个!state 
   */ 
  toggleAll = () => {
    // 从本地缓存拿来任务列表 如果清空缓存需要设置默认值
    const { todoList, done } = this.state;

    // 每次全选要更新done complete两个变量来确保页面渲染部分正确
    const state = !done;
    const isAllCompleted = !done;
    const newtodoList = todoList.map((todoObj) => {
      todoObj.isActive = !state;
      return todoObj
    })

    let updateTodoList = newtodoList;
  
    this.setState({
      todoList: updateTodoList,
      done: state,
      complete: isAllCompleted,
    })
    // console.log("todoList现状：", newtodoList)
    // console.log("是否全complete(done=isAllCompleted=)", done, complete)
  }

  // 删除todoItem
  deleteTodo = (id) => {
    const { todoList } = this.state;
    const index = todoList.findIndex((todoObj) => 
      todoObj.id === id
    )
    todoList.splice(index, 1)
    this.setState({
      todoList,
    })
  }

  // 一键删除完成的任务
  deleteCompleted = () => {
    // 从本地缓存拿来任务列表 如果清空缓存需要设置默认值
    const { todoList } = this.state;
    const newtodoList = todoList.filter((todoObj) => 
      todoObj.isActive === true
    )

    console.log("恭喜你完成了一部分任务！目前剩余任务列表：", newtodoList)
    this.setState({
      todoList: newtodoList,
    })
  }

  // 更新任务的名称
  updateTodo = (id, newName) => {
    const { todoList } = this.state;
    const newtodoList = todoList.map((todoObj) => {
      if (newName === '') {
        this.deleteTodo(id)
      }

      if (todoObj.id === id) {
        todoObj.name = newName;
      }

      return todoObj
    })

    this.setState({
      todoList: newtodoList,
    })

    console.log("update finished!", newtodoList)
  }

  // 更新任务的可编辑状态
  
  updateEdit = (id, flag) => {
    const { todoList } = this.state;
    const newtodoList = todoList.map((todoObj) => {
      if (todoObj.id === id) {
        todoObj.isEdit = flag;
      }

      return todoObj;
    })

    this.setState({
      todoList: newtodoList,
    })
  }

  // 切换到all的任务列表
  // todoList.filter(i => all|active|completed)
  /**
   * state = {  
   *  filter: 
   * 
   *  all:
   *  active: 
   *  completed:
   * }
   * 
   * */
  shiftRender = (shift) => {
    this.setState({
      shift,
    })
    storage.setParams("shift", shift);
  }

  // 回车键触发的回调函数——新增一个todoItem
  handleKeyUp = (event) => {
    const { keyCode, target } = event
      if (keyCode !== 13) return;
      if (target.value.trim() === '') {
        alert("请正确输入您想加入todoList的任务哦~")
        return;
      }

      const newObj = {
        id: nanoid(),
        name: target.value.trim(),
        isActive: true,
        isEdit: false,
      }

      this.addTodo(newObj);
      target.value = ''
      console.log("新增的任务对象:", newObj)
  }

  // 切换全部任务的完成情况
  handleToggleAll = () => {
    this.toggleAll();
  }

  render() {
    const { todoList, shift, complete, done } = this.state;
    let renderTodoList = todoList;

    if (shift === 'active') {
      renderTodoList = todoList.filter((todoObj) => 
        todoObj.isActive === true
      )
    }

    if (shift === 'completed') {
      renderTodoList = todoList.filter((todoObj) => 
        todoObj.isActive === false
      )
    }
    
    const cache = storage.get("TodoList");
    this.todoList = cache ? cache : [];
    
    return (
      <div>
        <header className='header'>
          <input onKeyUp={ this.handleKeyUp } className="new-todo" placeholder='What needs to be done?' />
        </header>
        <section className='list'>
          <input className="toggle-all"  type="checkbox" />
          <label 
            htmlFor="toggle-all" 
            style={{ color: done ? "#737373" : "#e6e6e6", display: todoList.length  ? '' : 'none' }} 
            onClick={ this.handleToggleAll }
          >
          </label>
          <ul>
            {
              renderTodoList.map((todo) => {
                return <TodoItem
                          key={ todo.id } 
                          todo={ todo }
                          done={ !todo.isActive } 
                          changeState={ this.changeState } 
                          deleteTodo={ this.deleteTodo } 
                          updateTodo={ this.updateTodo }
                          updateEdit={ this.updateEdit }
                        />
              })
            }
          </ul>
        </section>
        <Footer 
          todos={ todoList }
          shift={ shift }
          complete={ complete } 
          deleteCompleted={ this.deleteCompleted }
          shiftRender={ this.shiftRender }
        />
      </div>
    )
  }
}