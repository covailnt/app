import PropTypes from 'prop-types'
import styled from 'styled-components'

const Absolute = styled.div`
  position: absolute;
  top: ${props => (props.top ? 0 : null)};
  right: ${props => (props.right ? 0 : null)};
  bottom: ${props => (props.bottom ? 0 : null)};
  left: ${props => (props.left ? 0 : null)};
  z: ${props => props.z};
`

Absolute.propTypes = {
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  z: PropTypes.number,
}

export default Absolute
