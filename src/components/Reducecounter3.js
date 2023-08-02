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

function Reducecounter3() {
 const [count,dispatch]  =  useReducer(reducer,initialstate);
 const[countTwo,dispatch2] = useReducer(reducer,initialstate)
  return (
    <div>
    <div>Count -{count}</div>
        <button onClick={()=>dispatch('INCREMENT')}>INCREMENT</button>
        <button onClick={()=>dispatch('DECREMENT')}>DECREMENT</button>
        <button onClick={()=>dispatch('RESET')}>RESET</button>
    
    <div>
    <div>Count2 -{countTwo}</div>
        <button onClick={()=>dispatch2('INCREMENT')}>INCREMENT</button>
        <button onClick={()=>dispatch2('DECREMENT')}>DECREMENT</button>
        <button onClick={()=>dispatch2('RESET')}>RESET</button>

    </div>
    </div>
  )
}

export default Reducecounter3