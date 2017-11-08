import { SIGN_OUT_REQUESTED } from 'actions/types'
import { Avatar, Button, Relative } from 'components/elements'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import appStore from 'reducers'
import styled from 'styled-components'
import { color } from 'styled-system'

const StyledList = styled.ul`
  position: absolute;
  top: 47px;
  margin: 0;
  right: 0;
  display: block;
  min-width: 250px;
  ${color};
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
          <StyledList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Secret Profile</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up Landing Page</Link>
            </li>
            <li>
              <Link to="/signup/create-account/step-1">SignUp-Step-1</Link>
            </li>
            <li>
              <Link to="/">
                <Button
                  onClick={() =>
                    appStore.dispatch({ type: SIGN_OUT_REQUESTED, user: null })}
                >
                  Sign Out
                </Button>
              </Link>
            </li>
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
