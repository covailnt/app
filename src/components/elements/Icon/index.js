import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import classes from './Icon.scss'


const Icon = ({ className, color, name, size, ...props }) => {
  return size
    ? (
      <i
        aria-hidden="true"
        className={`fa fa-${name} fa-${size} ${className} ${classes.icon}`}
        style={{ color: theme.color[color] }}
        {...props}
      />
    )
    : (
      <i
        aria-hidden="true"
        className={`fa fa-${name} ${className} ${classes.icon}`}
        style={{ color: theme.color[color] }}
        {...props}
      />
    )
}

Icon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
}

export default Icon
