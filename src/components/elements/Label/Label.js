import styled from 'styled-components'
import { color, fontSize, propTypes, space } from 'styled-system'

const Label = styled.label`
  ${space} ${fontSize} ${color};
`
// Accepts all props that you can pass to a standard react <label> element

Label.propTypes = {
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
}

Label.defaultProps = {
  color: 'white',
  fontSize: 2,
}

export default Label
