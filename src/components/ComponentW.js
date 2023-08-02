import React, { useContext } from 'react'
import { countContext } from '../App'

function ComponentW() {
    const CountContext = useContext(countContext);
  return (
    <div>ComponentW - {CountContext.countState}
    <div>
        <button onClick={()=>CountContext.countDispatch('INCREMENT')}>INCREMENT</button>
        <button onClick={()=>CountContext.countDispatch('DECREMENT')}>DECREMENT</button>
        <button onClick={()=>CountContext.countDispatch('RESET')}>RESET</button>
    </div>
    </div>
  )
}

export default ComponentW