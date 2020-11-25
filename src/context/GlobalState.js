import React,{useState} from 'react';
import { uuid } from 'uuidv4';


export const globalData = React.createContext();

export function GlobalState({children}) {
    const [todo, setTodo] = useState('');
    const [todoArr, setTodoArr] = useState([])

    const todoHandleChange = (e) =>{
        setTodo(e.target.value)
    }

    const todoHandleSubmit = e => {
        e.preventDefault();
        const todoObj = {
            todo : todo,
            id : uuid(),
        }
        setTodoArr([...todoArr, todoObj])
        setTodo('')
    }

    const handleDelete = id =>{
        const tempTodoArr = todoArr.filter(todo => todo.id !== id)
        setTodoArr(tempTodoArr)
    }
    return (
        <div>
            <globalData.Provider value={{
                todo,
                todoHandleChange,
                todoHandleSubmit,
                todoArr,
                handleDelete,
                }}>
                {children}
            </globalData.Provider>
        </div>
    )
}

export default GlobalState
