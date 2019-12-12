import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const {title,handleDelete, handleCheck} = this.props
        return (
            <div id="5d966710-1c0a-11ea-bd9d-eb7e199293e6" className="todo">
                <button className="check" onClick={handleCheck}></button>
                <p>{title}</p>
                <button className="delete" onClick={handleDelete}>X</button>
            </div>
        );
    }
}

export default TodoItem;
