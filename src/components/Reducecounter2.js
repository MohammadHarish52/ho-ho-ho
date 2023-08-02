import React, { useReducer } from 'react'

const initialstate = {
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            console.log("Increment")
            return {...state ,firstCounter:state.firstCounter + action.value};
          
            case "DECREMENT2" :
              return { ...state ,secondCounter:state.secondCounter - action.value};
              console.log("Increment");
               
              case "INCREMENT2 " :
                console.log("Increment")
                return {...state , secondCounter :state.secondCounter + action.value};
              
                case "DECREMENT" :
                  return {...state ,firstCounter:state.firstCounter - action.value};
                  console.log("deccrement2")
                   
            case "RESET":
            return initialstate;
               
            default:
            return state;
                
    }
}

function Reducercounter2() {
 const [count,dispatch]  =  useReducer(reducer,initialstate)
  return (
    <div>
    <div>first Count -{count.firstCounter}</div>
    <div>secondCount -{count.secondCounter}</div>
        <button onClick={()=>dispatch({type:'INCREMENT' , value :1 })}>INCREMENT</button>
        <button onClick={()=>dispatch({type:'DECREMENT'  , value :1})}>DECREMENT</button>
        <div>
        <button onClick={()=>dispatch({type:'INCREMENT2' , value :1 })}>INCREMENT</button>
        <button onClick={()=>dispatch({type:'DECREMENT2'  , value :1})}>DECREMENT</button>
        </div>
        
        <button onClick={()=>dispatch({type:'INCREMENT' , value :5 })}>INCREMENT</button>
        <button onClick={()=>dispatch({type:'DECREMENT'  , value :5})}>DECREMENT</button>
        <button onClick={()=>dispatch({type:'RESET'  , value :1})}>RESET</button>
    </div>
   
  )
}

export default Reducercounter2