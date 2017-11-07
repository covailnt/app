import PropTypes from 'prop-types'
import styled from 'styled-components'
import { width } from 'styled-system'

const Relative = styled.div`
  position: relative;
  z: ${props => props.z};
  ${width};
`

Relative.propTypes = {
  z: PropTypes.number,
}

export default Relative
