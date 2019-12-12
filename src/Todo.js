import React, { Component } from 'react';
import './Todo.css';
import TodoItem from "./TodoItem"

class Todo extends Component {
    render() {
        const { items, handleDelete, handleCheck } = this.props
        // console.log(items);
        return (
            <div>
                {items.map(item => {
                    return <TodoItem key={item.title} title={item.title} handleDelete={()=>handleDelete(item.title)} handleCheck={handleCheck}/>;
                })}
            </div>
        )
    }
}

export default Todo;
