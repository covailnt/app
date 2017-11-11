import { Flex } from 'components/elements'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { media } from 'utils'

import classes from './Navbar.scss'

const StyledFlex = styled(Flex)`
  ${media.lessThan('sm')`
    display: none;
  `};
`

class Navbar extends Component {
  render() {
    return (
      <StyledFlex
        align="center"
        background={this.props.color}
        className={classes.navbar}
        justify="flex-end"
      >
        {this.props.children}
      </StyledFlex>
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
