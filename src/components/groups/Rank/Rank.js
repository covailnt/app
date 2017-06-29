import React from 'react'
import PropTypes from 'prop-types'
import theme from 'theme'
import { Heading } from 'components/elements'

const Rank = ({ type, value }) => {
  return (
    <div className='rank flex-row'>
      <Heading level={5} color='white'>Rank <br/>{type}</Heading>
      <Heading level={1} color='white'>{value}</Heading>
    </div>
  )
}

Rank.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Rank

