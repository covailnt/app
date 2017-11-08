import { SIGN_OUT_REQUESTED } from 'actions/types'
import { Avatar, Button, MenuItem, Relative } from 'components/elements'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import appStore from 'reducers'
import styled from 'styled-components'
import { color, space } from 'styled-system'

const StyledList = styled.ul`
  position: absolute;
  top: 47px;
  margin: 0;
  right: 0;
  display: block;
  min-width: 250px;
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
    const { user } = this.props

    return (
      <Relative>
        <Avatar
          onClick={() => this.toggleMenu()}
          margin="0 20px"
          padding="5px"
          size="50px"
          src={user.photoURL || '/public/images/avatar.png'}
        />
        {this.state.open && (
          <StyledList bg="black" px={3}>
            <MenuItem link="/">Home</MenuItem>

            <MenuItem link="/profile">Secret Profile</MenuItem>

            <MenuItem link="/signup">Sign Up Landing Page</MenuItem>

            <MenuItem link="/signup/create-account/step-1">
              SignUp-Step-1
            </MenuItem>

            <MenuItem link="/">
              <Button
                onClick={() =>
                  appStore.dispatch({ type: SIGN_OUT_REQUESTED, user: null })}
              >
                Sign Out
              </Button>
            </MenuItem>
          </StyledList>
        )}
      </Relative>
    )
  }
}

UserMenu.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserMenu)
