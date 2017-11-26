import { color, space } from '~/styled'
import { colors } from '~/theme'
import styled from 'styled-components'

const border = props => {
  if (props.hasErrors) {
    return `border: 2px solid ${colors['red5']};`
  }

  return `border: 2px solid ${colors[props.borderColor]};`
}

export const StyledInput = styled.input`
  border-radius: 6px;
  box-sizing: border-box;
  width: ${props => props.width};
  ${border} ${color} ${space};
`
