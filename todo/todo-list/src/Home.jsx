import React from 'react'
import { useState } from 'react'
import Create from './Create'
import { useEffect } from 'react'
import axios from 'axios'
function Home() {
    const [todos,setTodos]=useState([])
    useEffect(()=>{
axios.get('http://localhost:5000/get')
.then(result=> setTodos(result.data))
.catch(err=> console.log(err))
    },[])
  return (
    <div>

        <h2>TO DO LIST</h2>
        <Create />
        {
            todos.length===0 
            ?
            <div> <h3> No Records</h3></div>
            :
            todos.map(todo=>(
                <div>
                    {todo.task}
                    </div>
            ))
        }

    </div>
  )
}

export default Home