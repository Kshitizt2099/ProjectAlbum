import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Adddata.css"
const Update = (props) => {
const{id}=useParams()
const data=props.data

const[updatedName,setname]=useState(data.name)
const update=props.update


  return (
    <div class="login-container">
      hello {id}<br/>
      <label>Enter the name you want to change</label>
       <input type="text" placeholder='name' onChange={(e)=>{setname(e.target.value)}}/>
       <Link to="/"><button onClick={()=>{update(id,updatedName)}}>Update</button></Link>
    </div>
  )
}

export default Update
