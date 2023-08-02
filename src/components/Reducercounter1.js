import React, { useReducer } from 'react'

const initialstate = 0;
const reducer = (state,action) => {
    switch(action){
        case "INCREMENT":
            console.log("Increment")
            return state+1;
          
            case "DECREMENT" :
              return state-1;
               
            case "RESET":
            return initialstate;
               
            default:
            return state;
                
    }
}

function Reducercounter1() {
 const [count,dispatch]  =  useReducer(reducer,initialstate)

  return (
    <div>
    <div>Count -{count}</div>
        <button onClick={()=>dispatch('INCREMENT')}>INCREMENT</button>
        <button onClick={()=>dispatch('DECREMENT')}>DECREMENT</button>
        <button onClick={()=>dispatch('RESET')}>RESET</button>
    </div>
  )
}

export default Reducercounter1