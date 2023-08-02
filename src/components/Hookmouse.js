import React, { useEffect, useState } from 'react'

function Hookmouse() {
    const[x,setx] =useState(0);
    const[y,sety] = useState(0);

    const logMousePosition = e =>{
        console.log('Mouse event')
        setx(e.clientX)
        sety(e.clientY)

    }

    useEffect(()=> {
        console.log('useeffect called')
        window.addEventListener('mousemove' , logMousePosition)
        return () =>{
            //clean up
            console.log("unpahading")
            window.removeEventListener("mousemove", logMousePosition) 
        }
    },[])
  return (
    <div>
        Mouse Position: ({ x },{ y })
    </div>
  )
}

export default Hookmouse