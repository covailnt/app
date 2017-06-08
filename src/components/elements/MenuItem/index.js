import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  padding: 1em;
  list-style: none;
  color: white;
`

export default (props)=>(
  <Item onClick={props.onClick} className={props.className}>
    {props.children}
  </Item>
)
