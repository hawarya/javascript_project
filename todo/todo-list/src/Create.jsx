import React, { useState } from 'react'
import axios from 'axios'
function Create() {
  const [task,setTask]=useState()
    const handleAdd=()=>{
      axios.post('http://localhost:5000/add',{task:task})
      .then(result=>console.log(result))
      .catch(err=> console.log(err))
    }
  return (
    <div>
        <input type="text" name="" id=""  placeholder='Enter Task' onChange={(e)=>setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default Create