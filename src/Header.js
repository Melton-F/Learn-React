import React from 'react'

const Header = (props) => {
  return (
    <header>
        <h1>{props.head}</h1>
    </header>
  )
}

Header.defaultProps = {
  head : "Saanakya"
}
export default Header