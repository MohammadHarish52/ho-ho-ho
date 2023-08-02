import React, { useState } from 'react'

function Hookscounter2() {
    var initialCount =0;
    const[ count , setcount ] = useState(initialCount);

    const increaMentCount =()=>{
        for(let i = 0;i<5;i++){
            setcount(prevCount => prevCount +1)
        }
    }
  return (
    <div> Count: {count}
        <button onClick={()=> setcount(initialCount)}>
           Reset
        </button>
        <button onClick={()=>setcount(prevCount => prevCount +1)}>
           Increament
        </button>
        <button onClick={()=>{setcount(prevCount => prevCount -1 )}}>
            Decreament
        </button>
        <button onClick={increaMentCount} >increase</button>
    </div>
  )
}

export default Hookscounter2