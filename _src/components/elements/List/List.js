import { color, space } from '~/styled'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Ol = styled.ol`
  ${color} ${space};
`
const Ul = styled.ul`
  ${color} ${space};
`

const List = ({ ordered, children, ...props }) => {
  return React.createElement(ordered ? Ol : Ul, props, children)
}

List.propTypes = {
  ordered: PropTypes.bool,
  reverse: PropTypes.bool,
  children: PropTypes.any,
}

export default List
