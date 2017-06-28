import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components/elements'
import { Rank } from 'components/groups'
import { logOut } from 'refire/auth'
import theme from 'theme'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  menu: {
    background: theme.color.black,
    color: theme.color.white,
  }
})

const Navbar = ({ menuOpen }) => {
  const renderMenu = () => {
    return menuOpen
      ? (
        <ul className={`menu-dropdown ${css(styles.menu)}`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Secret Profile</Link></li>
          <li><Link to='/signup'>Sign Up Landing Page</Link></li>
          <li><Link to='/signup/create-account/step-1'>SignUp-Step-1</Link></li>
          <li><Link to='/'><Button onClick={() => logOut()}>Log Out</Button></Link></li>
        </ul>
      )
      : ''
  }

  return (
    <div id='navbar'>
      <Rank type='Earned' value='005' />
      <Rank type='Potential' value='99' />
      {renderMenu()}
    </div>
  )
}

export default Navbar
