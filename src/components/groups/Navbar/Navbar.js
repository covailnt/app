import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id='navbar'>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Secret Profile</Link></li>
        <li><Link to='/signup'>SignUp-Landing</Link></li>
        <li><Link to='/signup/create-profile'>SignUp</Link></li>
      </ul>
      <button>
        <a href="https://console.firebase.google.com" target='_blank'>
          Firebase Console
        </a>
      </button>
    </div>
  )
}

export default Navbar
