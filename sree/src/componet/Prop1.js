import React, { useEffect } from 'react'
import Prop from './Prop'
import Calssa from './Calssa'

function Prop1(props) {

// useEffect(()=>{

// },[])

  return (
    <div>
    
        <h2>{props.name}</h2>
        <Calssa data={props.name}></Calssa>
    
    </div>
  )
}

export default Prop1
