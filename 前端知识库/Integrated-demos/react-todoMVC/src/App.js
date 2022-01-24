// @ts-nocheck
import React, { Component, Fragment } from 'react';
import TodoModel from './components/TodoModel/TodoModel'
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <header className='topHead'>
          todos
        </header>
        <section className='todoApp'>
          <TodoModel />
        </section>
        <footer className='info'>
          <p>Threeble-click to edit a todo</p>
          <p>TodoMVC-React created by <a href="https://github.com/FangzhouSu">Fangzhou Su</a></p>
        </footer>
      </Fragment>
    )
  }
}
