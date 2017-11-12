import { omit } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'
import { color, space } from 'styled-system'

// If you want to have a standard link like one that links to an
//  outside page, then pass a string to the `href` prop
// If you want a react router link then pass a string to the `route` prop
// If you want to wrap it in a <li> tag, pass `li` as a boolean

const StandardLink = styled.a`
  text-decoration: none;
  ${color};
`

const RouteLink = styled(RouterLink)`
  text-decoration: none;
  ${color};
`

const ListItem = styled.li`
  ${space};
`

const Link = props => {
  if (props.to) {
    return props.li ? (
      <ListItem {...props}>
        <RouteLink {...omit(props, ['href', 'li'])} />
      </ListItem>
    ) : (
      <RouteLink {...omit(props, ['href', 'li'])} />
    )
  } else {
    return props.li ? (
      <ListItem {...props}>
        <StandardLink {...omit(props, ['to', 'li'])} />
      </ListItem>
    ) : (
      <StandardLink {...omit(props, ['to', 'li'])} />
    )
  }
}

Link.displayName = 'Link'

Link.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node,
  li: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
}

Link.defaultProps = {
  color: 'white',
  li: true,
  m: 0,
  p: 0,
}

export default Link
