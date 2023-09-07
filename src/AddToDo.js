import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const AddToDo = ({ newToDos, setNewToDos, handleAddButton }) => {
  return (
    <form className="addForm" onSubmit={handleAddButton}>
      <label htmlFor="addToDo">Add ToDo</label>
      <input
        type="text"
        autoFocus
        id='addToDo'
        placeholder='Add a todo'
        required
        value={newToDos}
        onChange={(event)=>setNewToDos(event.target.value)}
      />
      <button type='submit' aria-label='Add ToDo'>
        <FaPlus />
      </button>
    </form>
  )
}
