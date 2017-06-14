import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import './Icon.scss'


const Icon = ({name, size, className, color, ...props}) => {
  return size
    ? (
      <i
        aria-hidden='true'
        className={`fa fa-${name} fa-${size} ${className}`}
        style={{ color: theme.color[color] }}
        {...props} />
    )
    : (
      <i
        aria-hidden='true'
        className={`fa fa-${name} ${className}`}
        style={{ color: theme.color[color] }}
        {...props} />
    )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
}

export default Icon
