import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    return (
      <section id="todo-content">
        <NewTodo />
        <Todo />
      </section>
    );
  }
}

export default App;
