import { omit } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { color, space, width } from 'styled'
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'

const Box = styled(props => <div {...omit(props, ['align', 'wrap'])} />)`
  ${align} ${color} ${space} ${width};
`

const align = responsiveStyle('text-align', 'align')

Box.displayName = 'Box'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
])

Box.propTypes = {
  color: PropTypes.string,
  bg: PropTypes.string,
  width: numberStringOrArray,
  w: numberStringOrArray,
  /** Margin */
  m: numberStringOrArray,
  mt: numberStringOrArray,
  mr: numberStringOrArray,
  mb: numberStringOrArray,
  ml: numberStringOrArray,
  mx: numberStringOrArray,
  my: numberStringOrArray,
  /** Padding */
  p: numberStringOrArray,
  pt: numberStringOrArray,
  pr: numberStringOrArray,
  pb: numberStringOrArray,
  pl: numberStringOrArray,
  px: numberStringOrArray,
  py: numberStringOrArray,
}

export default Box
