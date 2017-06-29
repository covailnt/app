import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Avatar, Button } from 'components/elements'
import { logOut } from 'refire/auth'
import { StyleSheet, css } from 'aphrodite'
import theme from 'theme'

const styles = StyleSheet.create({
  menu: {
    background: theme.color.black,
    color: theme.color.white,
  }
})

class UserMenu extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
  }
  renderMenu() {
    return this.state.open
      ? (
        <ul className={`menu-dropdown ${css(styles.menu)}`}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Secret Profile</Link></li>
          <li><Link to='/signup'>Sign Up Landing Page</Link></li>
          <li><Link to='/signup/create-account/step-1'>SignUp-Step-1</Link></li>
          <li><Link to='/'><Button onClick={() => logOut()}>Log Out</Button></Link></li>
        </ul>
      )
      : ''
  }
  toggleMenu() {
    this.setState({ open: !this.state.open })
  }
  render() {
    const { user } = this.props

    return (
      <div className='menu-ctn'>
        <Avatar onClick={() => this.toggleMenu()} src={user.providerData[0].photoURL} size='50px' />
        {this.renderMenu()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserMenu)
