import PropTypes from 'prop-types'
import { color, space } from 'styled'
import styled from 'styled-components'
import { fontSizes } from 'theme'

const Badge = styled.div`
  border-radius: 99999px;
  display: inline-block;
  font-size: ${fontSizes[0]}px;
  font-weight: 600;
  ${color} ${space};
`

Badge.defaultProps = {
  color: 'white',
  bg: 'primary',
  px: 2,
  py: 1,
}

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
])

Badge.propTypes = {
  bg: PropTypes.string,
  px: numberStringOrArray,
  py: numberStringOrArray,
}

Badge.displayName = 'Badge'

export default Badge
