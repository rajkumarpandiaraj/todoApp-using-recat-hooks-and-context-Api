import React, {useContext} from 'react';
import TodoItem from './TodoItem';
import { globalData } from '../context/GlobalState';

function TodoList() {
    const {todoArr } = useContext(globalData)
    return (
        <ul className='todo-list'>
            {
            todoArr.map(todo => <TodoItem key={todo.id} todo={todo}/>)
            }
        </ul>
    )
}

export default TodoList
