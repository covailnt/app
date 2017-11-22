import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  border-radius: 50%;
  cursor: pointer;
  padding: 5px;
`

const Avatar = ({ onClick, size, src }) => {
  return <Img alt="avatar" width={size} onClick={onClick} src={src} />
}

Avatar.defaultProps = {
  src: '/public/images/avatar.png',
  size: '100px',
}

Avatar.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string,
  src: PropTypes.string,
}

export default Avatar
