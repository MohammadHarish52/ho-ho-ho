
import React, { useReducer } from 'react';
import './App.css';
import MouseContainer from './MouseContainer';
import ClassCounter1 from './components/ClassCounter1';
import Datafetching from './components/Datafetching';
import Effectcounter1 from './components/Effectcounter1';
import HookCounter4 from './components/HookCounter4';
import Hookcounter3 from './components/Hookcounter3';
import Hookmouse from './components/Hookmouse';
import Hooks1 from './components/Hooks1';
import Hookscounter2 from './components/Hookscounter2';
import ComponentC from './components/ComponentC';
import ComponentE from './components/ComponentE';
import Reducercounter1 from './components/Reducercounter1';
import Reducercounter2 from './components/Reducecounter2';
import Reducecounter3 from './components/Reducecounter3';
import ComponentZ from './components/ComponentZ';
import ComponentX from './components/ComponentX';
import ComponentY from './components/ComponentY';

 export const userContext = React.createContext();
 export const channelContext = React.createContext();
 export const countContext = React.createContext();

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
function App() {
  const[count,dispatch] = useReducer(reducer,initialstate)
  return (
    <countContext.Provider  value = {{countState : count , countDispatch : dispatch}}>
    <div className="App">
     {/* <Hooks1/>
     <Hookscounter2/>
     <Hookcounter3/>
     <HookCounter4 /> */}
     {/* <ClassCounter1 /> */}
     {/* <Hookmouse /> */}
     {/* <MouseContainer/> */}
     {/* <Datafetching /> */}
     {/* <userContext.Provider value ={'Ridhimaa'}>
      <channelContext.Provider value={'Eeenie Meeenie'}>
         <ComponentE />
      </channelContext.Provider>
     </userContext.Provider> */}
     {/* <Reducercounter1/> */}
     {/* */}
      {/* <Reducecounter3/> */}
      
      Count - {count}
      <ComponentZ />
      <ComponentX />
      <ComponentY />
    </div>
    </countContext.Provider>
  );
}

export default App;
