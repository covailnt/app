import { Box } from 'components/elements'
import PropTypes from 'prop-types'
import { width } from 'styled'
import styled from 'styled-components'
import { borderRadius, responsiveStyle } from 'styled-system'

const align = responsiveStyle('align-items', 'align')
const direction = responsiveStyle('flex-direction', 'direction')
const justify = responsiveStyle('justify-content', 'justify')
const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')

const Flex = styled(Box)`
  display: flex;
  ${align} ${borderRadius} ${direction} ${justify} ${width} ${wrap};
`

Flex.propTypes = {
  /** align-items */
  align: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'stretch',
  ]),
  /** flex-direction */
  direction: PropTypes.oneOf(['row', 'column']),
  /** justify-content */
  justify: PropTypes.oneOf([
    'center',
    'flex-start',
    'flex-end',
    'space-around',
    'space-between',
    'space-evenly',
    'stretch',
  ]),
  /** flex-wrap: wrap */
  wrap: PropTypes.bool,
}

export default Flex
