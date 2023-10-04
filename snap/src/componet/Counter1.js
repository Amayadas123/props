import React, { useState } from 'react'

function Counter1() {
    const [amaya,setAmaya]=useState(0)
  return (
    <div>
      <h1>counter app</h1>
      <p>{amaya}</p>
      <button onClick={()=>setAmaya(amaya+1)}>increment</button>
      <button onClick={()=>setAmaya(amaya-1)}>decrement</button>
      <button onClick={()=>setAmaya(0)}>reset</button>
      
      
    </div>
  )
}

export default Counter1