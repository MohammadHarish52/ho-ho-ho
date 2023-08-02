import React, { useContext } from 'react'
import { countContext } from '../App'

function ComponentZ() {
    const CountContext = useContext(countContext);
  return (
    <div>ComponentD
    <div>
        <button onClick={()=>CountContext.countDispatch('INCREMENT')}>INCREMENT</button>
        <button onClick={()=>CountContext.countDispatch('DECREMENT')}>DECREMENT</button>
        <button onClick={()=>CountContext.countDispatch('RESET')}>RESET</button>
    </div>
    </div>
  )
}

export default ComponentZ