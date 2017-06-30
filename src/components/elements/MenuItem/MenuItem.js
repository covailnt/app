import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import theme from 'theme'

const styles = StyleSheet.create({
  item: {
    background: theme.color.black,
    color: theme.color.white,
    ':hover': {
      background: theme.color.accent1,
      color: theme.color.primary,
    }
  }
})

const MenuItem = ({ children, link }) => (
  <Link to={link} className={`${css(styles.item)} menu-item`}>
    <li>
      {children}
    </li>
  </Link>
)

MenuItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
}

export default MenuItem
