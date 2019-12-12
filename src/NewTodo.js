import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {

    render() {
        const {item, handleChange, handleSubmit, handleSort} = this.props
        return (
            <form id="todo-form" onSubmit={handleSubmit}>
                <input id="new-task" type="text" placeholder="what would you like to do?" value={item} onChange={handleChange}/>
                <button id="add-task">+</button>
                <button onClick={handleSort} className="sort_button">Sort Alphabetically</button>
            </form>
        );
    }
}

export default NewTodo;