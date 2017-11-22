import PropTypes from 'prop-types'
import { color, space } from 'styled'
import styled from 'styled-components'
import { fontSize, fontWeight } from 'styled-system'

const Label = styled.label`
  display: block;
  ${space} ${fontSize} ${fontWeight} ${color};
`
// Accepts all props that you can pass to a standard react <label> element

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
])

Label.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
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

Label.defaultProps = {
  color: 'accent1',
  fontSize: 3,
  py: 2,
}

export default Label
