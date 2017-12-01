import { color, space, width } from '~/styled'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Fixed = styled.div`
  position: fixed;
  top: ${props => (props.top ? 0 : null)};
  right: ${props => (props.right ? 0 : null)};
  bottom: ${props => (props.bottom ? 0 : null)};
  left: ${props => (props.left ? 0 : null)};
  z-index: ${props => props.z};

  ${space};
  ${width};
  ${color};
`

Fixed.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  z: PropTypes.number,
}

export default Fixed
