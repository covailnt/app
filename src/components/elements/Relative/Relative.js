import PropTypes from 'prop-types'
import { width } from 'styled'
import styled from 'styled-components'

const Relative = styled.div`
  position: relative;
  z: ${props => props.z};
  ${width};
`

Relative.propTypes = {
  z: PropTypes.number,
}

export default Relative
