import React from 'react'
import PropTypes from 'prop-types'
import { Heading } from 'components/elements'
import theme from 'theme'

const Rank = ({ color, type, value }) => {
  return (
    <div className="rank flex-row">
      <Heading level={5} color={color}>Rank <br />{type}</Heading>
      <Heading level={2} color={color}>{value}</Heading>
    </div>
  )
}

Rank.defaultProps = {
  color: theme.color.black,
}

Rank.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Rank

