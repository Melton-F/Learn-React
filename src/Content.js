import React from 'react'

export const Content = () => {

    const handleWords = ()=>{
        const words = ["Nallavan", "Arivillaadhavan", "Salli", "Saani", "Item"]
        const i = Math.floor(Math.random()*5)
        return words[i]
      }

    const handleClick = (params)=>{
        console.log(params + " Clicked")
    }

    const checkEvent = (event)=>{
        console.log(event.target.innerText)
    }

  return (
   <main>
    <p>Sanjay oru {handleWords()}</p>
    <button onClick={() =>handleClick("Melton")}>Click</button> 
    <br />
    <button onClick={(event)=> checkEvent(event)}>check</button>
    <br />
    <button onDoubleClick={() =>handleClick("double")}>Double click</button>
   </main>
  )
}
