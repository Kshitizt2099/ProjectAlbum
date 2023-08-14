import React, { useEffect, useState } from 'react'
import Home from './Components/Home'
import Update from './Components/Update'
import Adddata from './Components/Adddata'
import { Route,Routes } from 'react-router-dom'
const App = () => {
const [data,setdata]=useState([])
  useEffect(()=>{
    const url="https://jsonplaceholder.typicode.com/albums"
    fetch(url).then((res)=>(res.json())).then((res)=>{setdata(res)})

  },[])
  const del=(element)=>{
   const arr=data.filter((i)=>(element.id!==i.id))
    setdata(arr)
  }
  const update=(id,name)=>{

    console.log("in update",id,name)
    const index=data.findIndex((i)=>(i.id==id))
    console.log(index)
    data[index].title=name
    setdata(data)
    alert('Componenet Has been Updated');

   }
   const adddata=(id,userid,title)=>{
    
     const newdata={"userId":userid,"id":id,"title":title}
     data.push(newdata)
     console.log("in adddata",newdata)
     setdata(data) 
     alert('Data Has been Entered');
   }
    console.log(data)
   
  return (
   
    <>
      <Routes>
        <Route exact path='/' element={<Home data={data} del={del} update={update}/>}/>
        <Route exact path='/update/:id' element={<Update data={data} update={update} />}/>
        <Route exact path='adddata' element={<Adddata  adddata={adddata} />}/>
      </Routes>
      
    </>

  )
}

export default App
