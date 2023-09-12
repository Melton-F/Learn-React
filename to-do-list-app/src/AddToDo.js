import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'



export const AddToDo = ({ newToDos, setNewToDos, handleAddButton }) => {
  const inputRef = useRef()
  return (
    <form className="addForm" onSubmit={handleAddButton}>
      <label htmlFor="addToDo">Add ToDo</label>
      <input
        type="text"
        ref={inputRef}
        autoFocus
        id='addToDo'
        placeholder='Add a todo'
        required
        value={newToDos}
        onChange={(event)=>setNewToDos(event.target.value)}
      />
      <button
       type='submit'
       onClick={()=> inputRef.current.focus()}
        aria-label='Add ToDo'>
        <FaPlus />
      </button>
    </form>
  )
}
