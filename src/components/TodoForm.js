import React,{useContext} from 'react';
import { globalData } from '../context/GlobalState';

function TodoForm() {
    const { todo, todoHandleChange, todoHandleSubmit } = useContext(globalData)
    return (
        <form className='form' onSubmit={todoHandleSubmit}>
            <input type='text' placeholder='Enter Todo' value={todo} onChange={todoHandleChange} />
            <button type='submit' className='btn'>Add</button>
        </form>
    )
}

export default TodoForm
