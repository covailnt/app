import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/elements'
import { Rank, SignIn } from 'components/groups'
import { logOut } from 'refire/auth'


const Navbar = ({ menuOpen }) => {
  return (
    <div id='navbar'>
      <Rank type='Earned' value='005' />
      <Rank type='Potential' value='99' />
      <SignIn />
    </div>
  )
}

export default Navbar
