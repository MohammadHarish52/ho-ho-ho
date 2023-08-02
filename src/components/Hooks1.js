import React from 'react'
import { useState } from 'react';

function Hooks1() {
    const [ x, setX ] = useState(0);
   
  return (
    <div>
        <button onClick={()=>setX(x+1)} >clicked {x}</button>
    </div>
  )
}

export default Hooks1