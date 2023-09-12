import React from 'react'

export const Footer = ({length}) => {
    // const year = new Date()
  return (
    <footer>
      <h6>Your {length === 1 ? "ToDo" : "ToDos"} : {length}</h6>
        {/* <h6>Copyrights &copy; {year.getFullYear()}</h6> */}
    </footer>
  )
}
