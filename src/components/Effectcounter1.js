import React, { useEffect, useState } from 'react'

function Effectcounter1() {
    const [count,newCount] = useState(0);
    const [name,setName] = useState('')
    useEffect(()=>{
      console.log('useEffect - updating document title')
        document.title =`clicked ${count} times`
    },[count])

    
  return (
    <div>
<input type= "text" value={name} onChange={e => setName(e.target.value)} />
    <button onClick={()=>newCount(count + 1)}>clicked {count} times</button>
    </div>
    
  )
}

export default Effectcounter1