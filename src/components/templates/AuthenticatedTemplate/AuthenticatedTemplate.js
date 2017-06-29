import React, { Component } from 'react'
import { MenuItem } from 'components/elements'
import { Rank } from 'components/groups'
import { Navbar, UserMenu } from 'components/wrappers'

export default class AuthenticatedTemplate extends Component {
  render() {
    const { children } = this.props
    return (
      <div>
        <Navbar color='black'>
          <Rank type='Earned' value='005' />
          <Rank type='Potential' value='99' />
          <UserMenu/>
        </Navbar>
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
