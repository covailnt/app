import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Flex } from 'rebass'

import classes from './SignUpTemplate.scss'

export default class SignUpTemplate extends Component {
  render() {
    const { children } = this.props
    return (
      <Flex
        align="center"
        className={classes.mainContainer}
        justify="center"
        wrap
      >
        <main>
          <Flex className={classes.content} justify="center" wrap>
            {children}
          </Flex>
        </main>
      </Flex>
    )
  }
}

SignUpTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}
