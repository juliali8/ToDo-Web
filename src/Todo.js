import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    render() {
        return (
            <div id="5d966710-1c0a-11ea-bd9d-eb7e199293e6" className="todo">
                <button className="check"></button>
                <p>first thing to do</p>
                <button className="delete">X</button>
            </div>
        );
    }
}

export default Todo;
