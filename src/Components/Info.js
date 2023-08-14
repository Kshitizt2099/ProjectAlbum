import React from 'react'
import './info.css'
import { Link } from 'react-router-dom'
const Info = (props) => {
    const data=props.data
    const del=props.delete
  return (

 <div class="card">
    <h2>name:{data.title}</h2>
    <p>uid:{data.userId}</p>
    <div class="button-container">
    <Link to={`/update/${data.id}`}><button class="button">Update</button></Link>
      <button class="button"onClick={()=>{del(data)}}>Delete</button>
    </div>
  </div>

   

  )
}

export default Info
