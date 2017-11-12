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

export const StatusCtn = styled.div`
  height: 175px;
  min-height: 175px;
`
// .statusCtn {

//   label {
//     margin-top: 2rem;
//     display: block;
//   }
//   select {
//     color: $text;
//     display: block;
//     width: 100%;
//     height: 40px;
//   }
//   .statusMsg {
//     color: $msg;
//     text-align: center;
//     @include rems(14);
//     span {
//       color: $primary;
//     }
//   }
//   .btnPrimary {
//     display: block;
//     width: 100%;
//     background: $primary;
//     color: $white;
//     border: 0;
//     padding: 7px 14px;
//     border-radius: 5px;
//   }
// }
