import React from 'react'

export const Footer = () => {
    const year = new Date()
  return (
    <footer>
        <h6>Copyrights &copy; {year.getFullYear()}</h6>
    </footer>
  )
}
