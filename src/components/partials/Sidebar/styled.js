import { Flex } from 'components/elements'
import { omit } from 'lodash'
import React from 'react'
import { Fixed } from 'rebass'
import styled from 'styled-components'
import { ifProp } from 'styled-tools'
import { media } from 'utils'

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
  ${media.greaterThan('sm')`
    display: none;
  `};
`
