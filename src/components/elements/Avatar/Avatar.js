import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import avatar from 'images/avatar.png'

const Avatar = ({ onClick, size, src }) => {
  return (
    <img
      className='avatar'
      width={size}
      onClick={onClick}
      src={src}
    />
  )
}

Avatar.defaultProps = {
  src: avatar,
  size: '100px',
}

Avatar.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  src: PropTypes.string,
}

export default Avatar

