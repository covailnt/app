import { Box } from 'components/elements'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'

const align = responsiveStyle('align-items', 'align')
const justify = responsiveStyle('justify-content', 'justify')
const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')

const Flex = styled(Box)`
  display: flex;
  ${align} ${justify} ${wrap};
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
