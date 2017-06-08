import React from 'react'
import { Button } from 'components/elements'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Secret Profile</Link></li>
      </ul>
      <Button>Log In</Button>
      <Button>Sign Up</Button>
    </div>
  )
}

export default Navbar
