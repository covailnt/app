import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import { MenuItem } from 'components/elements'
import style from './style.scss'
const Sidebar = ({ children }) => {
  return (
    <div className={`${style.sidebar} flex-column`} style={{background: theme.color.black}}>
      {children}
      <MenuItem link='/profile'>Profile</MenuItem>
      <MenuItem link='/contacts'>Contacts</MenuItem>
      <MenuItem link='/chat'>Chat</MenuItem>
      <MenuItem link='/collab'>Collab Sessions</MenuItem>
    </div>
  )
}

export default Sidebar

