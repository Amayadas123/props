import React, { useState } from 'react'

function Ridhu() {
    const[abc,setAbc]=useState("ABCDD......")

    let name="ridhu"
  
  return (

    <>
          <h2> {abc} </h2> 
      <h1>{name}</h1>
      <button onClick={()=>setAbc("jerit is bad ")}>click</button>
    </>
  )
}

export default Ridhu
