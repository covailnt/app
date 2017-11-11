import { omit } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { color } from 'styled-system'

// If you want to have a standard link like one that links to an
//  outside page, then pass a string to the `href` prop
// If you want a react router link then pass a string to the `route` prop
// If you want to wrap it in a <li> tag, pass `li` as a boolean

const StandardLink = styled.a`
  text-decoration: none;
  ${color} &:hover {
    text-decoration: underline;
  }
`

const RouteLink = styled(RouterLink)`
  text-decoration: none;
  ${color} &:hover {
    text-decoration: underline;
  }
`

const Link = props => {
  if (props.route) {
    return props.li ? (
      <li>
        <RouteLink {...omit(props, ['href'])} />
      </li>
    ) : (
      <RouteLink {...omit(props, ['href'])} />
    )
  } else {
    return props.li ? (
      <li>
        <StandardLink {...omit(props, ['to'])} />
      </li>
    ) : (
      <StandardLink {...omit(props, ['to'])} />
    )
  }
}

Link.displayName = 'Link'

Link.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  li: PropTypes.bool,
  route: PropTypes.string,
  href: PropTypes.string,
}

Link.defaultProps = {
  color: 'blue',
}

export default Link
