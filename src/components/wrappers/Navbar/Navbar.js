import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Flexbox } from 'components/elements'
import classes from './Navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <Flexbox
        className={classes.navbar}
        background={this.props.color}
      >
        {this.props.children}
      </Flexbox>
    )
  }
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar)
