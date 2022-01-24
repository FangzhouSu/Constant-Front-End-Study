
import React, { Component, Fragment } from 'react'
import './Footer.css'

/**
 * leftNumber: int
 * 
 * onChangeStatus(status)
 *    onSelectAll|onSelectActive|onSelectCompleted
 * onClearCompleted
 */
export default class Footer extends Component {
  // 切换三个渲染状态
  handleShift = (shift) => {
    return () => {
      this.props.shiftRender(shift);
    }
  }

  render() {
    const { todos, complete, deleteCompleted, shift } = this.props;
    let leftCount = 0;
  
    todos.forEach((todo) => {
      if (todo.isActive) {
        leftCount += 1;
      }
      return leftCount
    })

    return (
      <Fragment>
        <footer className='footer' style={{ display: todos.length ? '' : 'none' }}>
          <span className='counts'>{ leftCount } items left</span>
          <ul className='filters'>
            <li>
              <a href="#/" className={ shift === "all" ? "selected" : null } onClick={ this.handleShift("all") }>All</a>
              <span></span>
            </li>
            <li>
              <a href="#/active" className={ shift === "active" ? "selected" : null } onClick={ this.handleShift("active") }>Active</a>
              <span></span>
            </li>
            <li>
              <a href="#/Completed" className={ shift === "completed" ? "selected" : null } onClick={ this.handleShift("completed") }>Completed</a>
              <span></span>
            </li>
          </ul>
          <button className='clear' style={{display: complete ? "" : "none"}} onClick={ deleteCompleted }>Clear completed</button>
        </footer>
      </Fragment>
    )
  }
}