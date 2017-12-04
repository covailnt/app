import { Avatar, Button, Link, Relative } from '~/components/elements'
import { signOutRequested } from '~/store/actions'
import { color, space } from '~/styled'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledList = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  min-width: 250px;
  position: absolute;
  right: 0;
  top: 47px;
  z-index: 999;
  ${color} ${space};
`

class UserMenu extends Component {
  constructor(props) {
    super(props)

    this.state = { open: false }
  }
  toggleMenu() {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <Relative>
        <Avatar
          onClick={() => this.toggleMenu()}
          margin="0 20px"
          padding="5px"
          size="50px"
          src={this.props.picture}
        />
        {this.state.open && (
          <StyledList bg="black" px={3}>
            <Link href="/" p={3}>
              Home
            </Link>

            <Link href="/profile" p={3}>
              Secret Profile
            </Link>

            <Link href="/signup" p={3}>
              Sign Up Landing Page
            </Link>

            <Link href="/signup/create-account/step-1" p={3}>
              SignUp-Step-1
            </Link>

            <Link href="/">
              <Button onClick={() => this.props.signOut()}>Sign Out</Button>
            </Link>
          </StyledList>
        )}
      </Relative>
    )
  }
}

UserMenu.defaultProps = {
  picture: '/static/images/avatar.png',
}

UserMenu.propTypes = {
  picture: PropTypes.string.isRequired,
  signOut: PropTypes.func.isRequired,
}

export default connect(null, { signOut: signOutRequested })(UserMenu)
