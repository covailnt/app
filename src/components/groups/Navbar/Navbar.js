import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Secret Profile</Link></li>
        <li><Link to='/signup/create-account/step-1'>SignUp-Step-1</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
