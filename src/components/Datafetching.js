import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetching() {
    const[post,setPost] = useState({})
    const[id,setId] = useState(1)
    const[idfrombutton,setidfrombutton]=useState(1)

    const HandleClick = ()=>{
      setidfrombutton(id)
    }

    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombutton}`)
      .then(res=>{
        console.log(res)
        setPost(res.data)
      })
      .catch(err=>{
        console.log(err)
      }) 
    },[idfrombutton])
  return (
    <div>
    <input type="text" value={id} onChange={e=>setId(e.target.value)} />
    <button type="button" onClick={HandleClick}>Fetch post</button>
    <div>{post.title}</div>
    {/* <ul>
        {
            posts.map(post => <li key ={post.id}>{post.title}</li>)
        }
    </ul> */}

    </div>
  )
}

export default Datafetching