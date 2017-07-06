import React, { Component } from 'react'
import { connect } from 'react-redux'
import theme from 'theme'

class Navbar extends Component {
  render() {
    return (
      <div
        id="navbar"
        className="flex-row flex-row"
        style={{ background: theme.color[this.props.color] }}
      >
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar)
