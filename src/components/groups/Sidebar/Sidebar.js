import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox, MenuItem } from 'components/elements'
import classes from './Sidebar.scss'

const Sidebar = ({ children }) => {
  return (
    <Flexbox className={classes.sidebar} direction="column" background="black">
      {children}
      <div className={classes.nav}>
        <ul className={classes.sidebarNav}>
          <MenuItem link="/profile">Profile <span className={classes.profileEdit}>edit</span></MenuItem>
          <MenuItem link="/contacts">Contacts <span className={classes.badge}>1</span></MenuItem>
          <MenuItem link="/chat">Chat <span className={classes.badge}>1</span></MenuItem>
          <MenuItem link="/collab">Collab Sessions <span className={classes.badge}>2</span></MenuItem>
        </ul>
      </div>
    </Flexbox>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar

