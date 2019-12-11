import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
    render() {
        return (
            <form id="todo-form">
                <input id="new-task" type="text" placeholder="what would you like to do?" />
                <button id="add-task">+</button>
            </form>
        );
    }
}

export default NewTodo;
