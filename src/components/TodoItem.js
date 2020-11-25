import React, {useContext} from 'react';
import { MdDelete } from 'react-icons/md';
import { globalData } from '../context/GlobalState';


function TodoItem(props) {
    const { handleDelete } = useContext(globalData)
    const {todo} = props
    return (
        <li className='todo-item'>
            <span className='todo'>{todo.todo}</span>
            <MdDelete className='del' onClick={() => handleDelete(todo.id)}/>
        </li>
    )
}

export default TodoItem
