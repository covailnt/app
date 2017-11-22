import PropTypes from 'prop-types'
import { color, space } from 'styled'
import styled from 'styled-components'
import { fontSize, responsiveStyle } from 'styled-system'

const caps = props =>
  props.caps
    ? {
        textTransform: 'uppercase',
      }
    : null

const regular = props =>
  props.regular ? { fontWeight: props.theme.regular } : null

const bold = props => (props.bold ? { fontWeight: props.theme.bold } : null)

const align = responsiveStyle('text-align', 'align')

const Text = styled.div`
  ${fontSize} ${space} ${color} ${caps} ${regular} ${bold} ${align};
`

Text.displayName = 'Text'

const numberStringOrArray = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.array,
])

Text.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array,
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  caps: PropTypes.bool,
  regular: PropTypes.bool,
  bold: PropTypes.bool,
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

Text.span = Text.withComponent('span')
Text.p = Text.withComponent('p')

export default Text
