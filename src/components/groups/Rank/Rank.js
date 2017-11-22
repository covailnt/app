import { Flex, Text } from 'components/elements'
import PropTypes from 'prop-types'
import React from 'react'
import { colors } from 'theme'

const Rank = ({ color, type, value }) => {
  return (
    <Flex align="center">
      <Text color={color} fontSize={1} mx={3}>
        Rank<br />
        {type}
      </Text>
      <Text color={color} fontSize={5}>
        {value}
      </Text>
    </Flex>
  )
}

Rank.defaultProps = {
  color: colors.black,
}

Rank.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default Rank
