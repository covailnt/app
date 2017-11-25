import { Badge } from 'components/elements'
import React from 'react'
import { responsiveStyle } from 'styled'
import styled from 'styled-components'

// const align = responsiveStyle('align-items', 'align')
// const direction = responsiveStyle('flex-direction', 'direction')
const justify = responsiveStyle('color', 'primary')
// const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')

const Flex = styled.div`
  ${justify};
`

const HomePage = () => {
  return <Flex color="center">1-</Flex>
}

export default HomePage
