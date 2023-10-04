import React from 'react'
import Prop3 from './Prop3'

function Prop2(props) {
  return (
    <div>
      <h1>{props.name}</h1>
        <Prop3 data={props.name}></Prop3>
    </div>
  )
}

export default Prop2
