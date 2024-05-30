import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><button className='btn'>Home</button></li>
            <li><button className='btn'>Programs</button></li>
            <li><button className='btn'>Donations</button></li>
            <li><button className='btn'>About us</button></li>
            <li><button className='btn'>Contact us</button></li> 
            <li><button className='btn'>Contact us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
