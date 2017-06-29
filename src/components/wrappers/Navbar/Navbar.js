import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Rank } from 'components/groups'
import { SignIn, UserMenu } from 'components/wrappers'
import theme from 'theme'

class Navbar extends Component {
  render() {
    return (
      <div
        id='navbar'
        className='flex-row flex-row'
        style={{background: theme.color[this.props.color]}}
      >
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(Navbar)
