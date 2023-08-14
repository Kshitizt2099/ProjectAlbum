

import Info from './Info.js'
import "./Home.css"

import Navbar from './Navbar.js'
const Home = (props) => {
 
  const del=props.del
  const data1=props.data
  return (
   
    <>
      <Navbar/>
      <div className='container'>
     
      {data1.map((i)=>(<Info key={i.id} data={i} delete={del}/>))}
    </div>
    </>

  )
}

export default Home
