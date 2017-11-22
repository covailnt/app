import PropTypes from 'prop-types'
import { color, space, width } from 'styled'
import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'

const Absolute = styled.div`
  bottom: ${prop('bottom', null)};
  left: ${prop('left', null)};
  pointer-events: ${prop('pointerEvents', 'auto')};
  position: absolute;
  right: ${prop('right', null)};
  top: ${prop('top', null)};
  z-index: ${prop('z', null)};

  ${ifProp(
    'translateX',
    css`
      transform: translateX(${props => props.translateX});
    `,
  )};

  ${ifProp(
    'translateY',
    css`
      transform: translateY(${props => props.translateY});
    `,
  )};

  ${ifProp(
    'translate',
    css`
      transform: translate(${props => props.translate});
    `,
  )};

  ${space};
  ${width};
  ${color};
`

Absolute.propTypes = {
  bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pointerEvents: PropTypes.string,
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  z: PropTypes.number,
}

export default Absolute
