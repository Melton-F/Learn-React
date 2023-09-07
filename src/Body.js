import React, { useState } from 'react'

export const Body = () => {

    const handleClick = (params)=>{
        console.log(params + " Clicked")
    }

    const checkEvent = (event)=>{
        console.log(event.target.innerText)
    }

    const[count, setCount] = useState(1)
    const handleIncrement = () =>{
        setCount(count+1)
    }
    const handleDeccrement = () =>{
        setCount(count-1)
    }

    const[word, setWord] = useState("New")
    const handleWords = () =>{
        const i = Math.floor(Math.random()*5)
        const words = ["good", "bad", "naughty", "rugged", "innocent"]
        setWord(words[i])
    }


  return (
   <main>

    <button onClick={() =>handleClick("Melton")}>Click</button> 
    <br />
    <button onClick={(event)=> checkEvent(event)}>check</button>
    <br />
    <button onDoubleClick={() =>handleClick("double")}>Double click</button>
    <br />

    <button onClick={handleDeccrement}>-</button>
    <span>{count}</span>
    <button onClick={handleIncrement}>+</button>
    <br />

    <p>I'm a {word} boy</p>
    <button onClick={handleWords}>subscribe</button>
    
   </main>
  )
}
