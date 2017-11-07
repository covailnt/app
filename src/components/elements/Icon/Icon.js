import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import icons from 'theme/icons.json'

const Base = ({ fill, name, size, ...props }) => {
  const icon = icons[name]

  if (!icon) return false

  return (
    <svg
      {...props}
      viewBox={icon.viewBox}
      width={size}
      height={size}
      fill={fill}
    >
      <path d={icon.path} />
    </svg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space} ${color};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  fill: 'primary',
  name: 'checkLight',
  size: 24,
}

Icon.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Icon
