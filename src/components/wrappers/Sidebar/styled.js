import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import theme from 'theme'
import { color } from 'styled-system'

export const BoxStyled = styled(Box)`
  ${color};
`

export const FlexStyled = styled(Flex)`
  max-width: 250px;
  min-height: 100vh;
  width: 500px;
`
