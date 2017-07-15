import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox, MenuItem } from 'components/elements'
import classes from './Sidebar.scss'

const Sidebar = ({ children }) => {
  return (
    <Flexbox className={classes.sidebar} direction="column" background="black">
      {children}
      <MenuItem link="/profile">Profile</MenuItem>
      <MenuItem link="/contacts">Contacts</MenuItem>
      <MenuItem link="/chat">Chat</MenuItem>
      <MenuItem link="/collab">Collab Sessions</MenuItem>
    </Flexbox>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar

