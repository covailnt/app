import PropTypes from 'prop-types'
import styled from 'styled-components'

const Relative = styled.div`
  position: relative;
  z: ${props => props.z};
`

Relative.propTypes = {
  z: PropTypes.number,
}

export default Relative
