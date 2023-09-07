import React from 'react'
import { FaTrashAlt } from "react-icons/fa"


export const LineTodos = ({todo, handleCheck, handleDeleteTodo}) => {
    return (
        <li className='todo'>

            <input type="checkbox" checked={todo.checked} onChange={() => handleCheck(todo.id)} />

            <label style={(todo.checked) ? { textDecoration: 'line-through' } : null} onDoubleClick={() => handleCheck(todo.id)}>
                {todo.activity}
            </label>

            <FaTrashAlt
                onClick={() => handleDeleteTodo(todo.id)}
                role='button'
                tabIndex='0'
                aria-label={`Delete ${todo.todo}`}
            />
            

        </li>)
}
