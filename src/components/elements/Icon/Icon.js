import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'

const Base = ({ name, size, ...props }) => {
  // const icon = oldAndNewIcons[name]

  // if (!icon) return false

  return (
    <svg
      {...props}
      // viewBox={icon.viewBox}
      width={size}
      height={size}
      fill="currentcolor"
    >
      {/* <path d={icon.path} /> */}
    </svg>
  )
}

const Icon = styled(Base)`
  flex: none;
  ${space} ${color};
`

Icon.displayName = 'Icon'

Icon.defaultProps = {
  name: 'checkLight',
  size: 24,
}

Icon.propTypes = {
  // name: PropTypes.oneOf(Object.keys(oldAndNewIcons)).isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Icon
