import React from 'react'
import PropTypes from 'prop-types'
import { Flexbox, Heading } from 'components/elements'
import theme from 'theme'
import classes from './Rank.scss'

const Rank = ({ color, type, value }) => {
  return (
    <Flexbox align="flex-start" className={classes.rank}>
      <Heading className={classes.heading} level={5} color={color}>Rank <br />{type}</Heading>
      <Heading className={classes.heading} level={2} color={color}>{value}</Heading>
    </Flexbox>
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

