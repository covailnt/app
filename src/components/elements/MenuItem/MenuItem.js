import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, css } from 'aphrodite'
import { Link } from 'react-router-dom'
import theme from 'theme'

const styles = StyleSheet.create({
  button: {
    background: theme.color.white,
  }
})

const MenuItem = ({ children, link }) => (
  <Link to={link} >
    <li className={`${css(styles.button)} menu-item`}>
      {children}
    </li>
  </Link>
)

MenuItem.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
}

export default MenuItem
