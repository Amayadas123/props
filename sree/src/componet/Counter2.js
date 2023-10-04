import React, { useState } from 'react'

function Counter2() {
    const[dolu,setdolu]=useState(0)
  return (
    <div>
      <h1>chottabeam app</h1>
      <p>{dolu}</p>
      <button onClick={()=>setdolu(dolu+1)}>increment</button>
      <button onClick={()=>setdolu(dolu-1)}>decrement</button>
      <button onClick={()=>setdolu(0)}>reset</button>

    </div>
  )
}

export default Counter2
