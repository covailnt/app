import { omit } from 'lodash'
import React from 'react'
import { Fixed, Flex } from 'rebass'
import styled from 'styled-components'
import media from 'styled-media-query'
import { ifProp } from 'styled-tools'

export const FlexStyled = styled(props => (
  <Flex {...omit(props, ['isOpen'])} />
))`
  display: ${ifProp('isOpen', 'flex', 'none')};
  max-width: 250px;
  min-height: 100vh;
  width: 500px;
`

export const ToggleOpen = styled(Fixed)`
  cursor: pointer;
  ${media.greaterThan('medium')`
    display: none;
  `};
`
