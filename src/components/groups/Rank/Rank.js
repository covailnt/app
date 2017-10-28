import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox, Heading } from 'components/elements'
import theme from 'theme'
import classes from './Rank.scss'

const Rank = ({ color, type, value }) => {
  return (
    <li>
      <span className={classes.rank} color={color}>
        Rank<br />
        {type}
      </span>
      <span className={classes.heading} color={color}>
        {value}
      </span>
    </li>
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
