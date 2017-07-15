import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'

const Heading = ({ level, className, color, children }) => {
  const Header = `h${level}`

  return (
    <Header className={className} style={{ color: theme.color[color] }}>{children}</Header>
  )
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node,
}

Heading.defaultProps = {
  color: 'black',
}

export default Heading
