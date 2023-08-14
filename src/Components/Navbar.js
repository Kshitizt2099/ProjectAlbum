import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
         <Link to="/adddata"><button className='button1'>Adddata</button></Link>
    </div>
  )
}

export default Navbar
