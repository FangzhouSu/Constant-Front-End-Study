import React, { Component } from 'react'
import './TodoItem.css'

/**
 * props:  { id, name, isActive }
 * 
 * emit: 
 *   onNameChange 
 *   onStatus
 *   onDeleted
 */
export default class TodoItem extends Component {
  // FIXME:勾选/新增/删除时Footer组件也会有变动（通过dev tools看到那边有刷新）——这一点应该是必须渲染的吧！通过render()
  state = {
    inputValue: '',
    isEdit: false,
  }

  // 勾选一个todo的回调 
  handleToggle = (id) => {
    return () => {
      this.props.changeState(id)
    }
  }

  // 删除一个todo的回调
  handleDelete = (id) => {
    // TODO:删除todo对应的回调在每次渲染页面的时候都会被调用？
    // console.log(`删除id为$${id}的todoItem,为啥我一直被调用啊啊啊啊`);
    return () => {
      this.props.deleteTodo(id)
    }
  }

  // 双向绑定input输入框中的值
  handleChangeInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  // 更新一个todo的名称
  handleUpdate = (id, newName) => {
    return (event) => {
      if (event.keyCode === 13) {
        if (newName !== '') {
          // inputValue: e.target.value
          this.props.updateTodo(id, newName);
        } else {
          this.props.deleteTodo(id)
          console.log("调用删除回调函数")
        }

        this.props.updateEdit(id, false)
      }
    }
  }

  // todo
  // 开始编辑
  handleEdit = (id, flag) => {
    return () => {
      this.props.updateEdit(id, flag)
    }
  }

  render() {
    const { todo, done } = this.props;
    return(
      // 使用completed样式——todo被划掉的效果
      <li 
        className={ ["editing", todo.isActive ? null : 'completed'].join(" ") } 
        onBlur={ this.handleEdit(todo.id, false) }
        onDoubleClick={ this.handleEdit(todo.id, true) } 
      >
        <div style={{ display: todo.isEdit ? "none" : null }}>
          {/* 监听input的checked——为true则给lable的:before伪元素加上勾选的图片 */}
          <input className="toggle" checked={ done } type="checkbox" onChange={ this.handleToggle(todo.id) }  />
          <label>{ todo.name } </label>
          {/** TOFIX: 删除一个任务之后，mouse属性不会被更新——暂时使用了onMouseMove 但是鼠标不动x还是出不来 
            *  可以使用卸载钩子componentWillUnmount() 当任务组件被销毁时更新mouse么？感觉有些麻烦*/}
          <span className="icon" onClick={ this.handleDelete(todo.id) }>×</span>
        </div>
        {/* // TOFIX: 隐藏view部分之后 移入鼠标仍会对x进行更新 & 无法自动聚焦-autoFocus也不管用噻！ */}
        <input 
          className="edit" 
          style={{ display: todo.isEdit ? null : "none" }} 
          defaultValue={ todo.name } 
          onKeyUp={ this.handleUpdate(todo.id, this.state.inputValue.trim()) }
          onChange={ this.handleChangeInput } 
          autoFocus
        />
      </li>
    )
  }
}