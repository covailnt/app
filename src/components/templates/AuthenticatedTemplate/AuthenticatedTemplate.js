import React, { Component } from 'react'
import { MenuItem } from 'components/elements'
import { Navbar } from 'components/wrappers'

export default class AuthenticatedTemplate extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar />
        <div className='side-bar'>
          <MenuItem link='/profile'>Profile</MenuItem>
          <MenuItem link='/contacts'>Contacts</MenuItem>
          <MenuItem link='/chat'>Chat</MenuItem>
          <MenuItem link='/collab'>Collab Sessions</MenuItem>
        </div>
        {children}
      </div>
    )
  }
}
