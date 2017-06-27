import React from 'react'
import { Link } from 'react-router-dom'
import { Rank } from 'components/groups'
import theme from 'theme'

const Navbar = () => {
  return (
    <div id='navbar'>
      <Rank type='Earned' value='005' />
      <Rank type='Potential' value='99' />
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Secret Profile</Link></li>
        <li><Link to='/signup'>Sign Up Landing Page</Link></li>
        <li><Link to='/signup/create-account/step-1'>SignUp-Step-1</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
