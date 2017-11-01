import { StyleSheet, css } from 'aphrodite'
import PropTypes from 'prop-types'
import React from 'react'
import theme from 'theme'

import classes from './Button.scss'

const Button = ({
  background,
  children,
  color,
  border,
  onClick,
  hover,
  disabled,
}) => {
  const bg = disabled && background == 'primary' ? 'white' : background
  const clr = disabled && color == 'white' ? 'accent1' : color
  const bdr =
    disabled && !border ? `${theme.colors.accent1} 1px solid` : border || 'none'

  const styles = StyleSheet.create({
    button: {
      background: theme.colors[bg],
      color: theme.colors[clr],
      border: bdr,
      ':hover': {
        background: theme.colors[hover],
      },
    },
  })
  return (
    <button
      className={`${css(styles.button)} ${classes.button}`}
      onClick={onClick}
      disabled={disabled || disabled == 'disabled' ? 'disabled' : false}
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
  disabled: PropTypes.bool,
  border: PropTypes.string,
}

export default Button
