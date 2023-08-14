import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
const Card = (props) => {
    const data=props.data
    const del=props.delete
  return (
    <div className='body'>
        <p>id:{data.id}</p>
        <p>uid:{data.userId}</p>
       <p>name:{data.title}</p>
       <button onClick={()=>{del(data)}}>Del</button>
       <Link to={`/update/${data.id}`}><button>Update</button></Link>

    </div>
  )
}

export default Card
