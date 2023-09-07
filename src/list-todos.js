import React from 'react'
import { LineTodos } from './line-todos'

export const ListToDos = ({todos, handleCheck, handleDeleteTodo}) => {
  return (
    todos.map((todo) => (
        <LineTodos 
        todo={todo}
        key={todo.id}
        handleCheck={handleCheck}
        handleDeleteTodo={handleDeleteTodo}
        />
    ))
  )
}
