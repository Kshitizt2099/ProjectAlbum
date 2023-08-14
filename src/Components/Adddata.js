import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Adddata.css'
const Adddata = (props) => {
    const[userid,setuserid]=useState("")
    const[id,setid]=useState("")
    const[title,settitle]=useState("")
    const adddata=props.adddata
  return (
    <div>
      <div class="login-container">
        <h1>Enter Book Name</h1>

  
     <input type="text" onChange={(e)=>{setid(e.target.value)}}class="form-control" id="exampleInputPassword1" placeholder="Enter ID"/>
     <input type="text" onChange={(e)=>{setuserid(e.target.value)}}class="form-control" id="exampleInputPassword1" placeholder="Enter UserID"/>
     <input type="text" onChange={(e)=>{settitle(e.target.value)}}class="form-control" id="exampleInputPassword1" placeholder="Enter name"/>
    <Link to="/"> <button onClick={()=>{adddata(id,userid,title)}}>Add data</button></Link>

    </div>
    </div>
  )
}

export default Adddata
