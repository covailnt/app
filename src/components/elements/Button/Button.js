import React from 'react'
import PropTypes from 'prop-types'
import classes from './Button.scss'
import { StyleSheet, css } from 'aphrodite'
import theme from 'theme'

const Button = ({background, children, color, onClick, hover}) => {
  const styles = StyleSheet.create({
    button: {
      background: theme.color[background],
      color: theme.color[color],
      ':hover': {
        background: theme.color[hover]
      }
    }
  })
  return (
    <button
      className={`button ${css(styles.button)}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  background: 'primary',
  color: 'white',
}

Button.propTypes = {
  background: PropTypes.string,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  hover: PropTypes.string,
}

export default Button

