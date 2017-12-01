import { Fixed, Flex } from '~/components/elements'
import { media } from '~/utils'
import { omit } from 'lodash'
import React from 'react'
import styled from 'styled-components'
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
  ${media.greaterThan('sm')`
    display: none;
  `};
`

export const StatusCtn = styled.div`
  height: 175px;
  min-height: 175px;
`
