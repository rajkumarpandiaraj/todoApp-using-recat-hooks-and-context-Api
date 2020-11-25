import React from 'react'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    return (
        <div className='todo-container'>
            <h1>Todo App</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    )
}

export default TodoApp
