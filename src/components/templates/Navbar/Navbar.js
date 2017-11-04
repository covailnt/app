import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Flex } from 'rebass'

import classes from './Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <Flex
        align="center"
        background={this.props.color}
        className={classes.navbar}
        justify="flex-end"
      >
        {this.props.children}
      </Flex>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar)
