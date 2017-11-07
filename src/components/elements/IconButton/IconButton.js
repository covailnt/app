import { Button, Icon } from 'components/elements'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const TransparentButton = styled(Button)`
  padding: 0;
  height: auto;
  background-color: transparent;
  color: inherit;
  &:hover {
    background-color: transparent;
  }
`

const IconButton = ({ name, size, color, ...props }) => (
  <TransparentButton {...props}>
    <Icon name={name} size={size} color={color} />
  </TransparentButton>
)

IconButton.displayName = 'IconButton'

IconButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
}

export default IconButton
