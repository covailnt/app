import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { color, space, width } from 'styled-system'
import { ifProp, prop } from 'styled-tools'

const Absolute = styled.div`
  position: absolute;
  top: ${prop('top', null)};
  right: ${prop('right', null)};
  bottom: ${prop('bottom', null)};
  left: ${prop('left', null)};
  z-index: ${prop('z', null)};

  ${ifProp(
    'translate',
    css`
      transform: ${props => props.translate};
    `,
  )};

  ${space};
  ${width};
  ${color};
`

Absolute.propTypes = {
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  z: PropTypes.number,
}

export default Absolute
