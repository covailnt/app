import { signInRequested } from 'actions'
import { Box, Button, Flex, Heading } from 'components/elements'
import { Input } from 'components/partials'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  FACEBOOK,
  FIELDS,
  GITHUB,
  GOOGLE,
  NEW_EMAIL,
  PROVIDER,
} from 'utils/constants'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      validEmail: false,
    }
  }
  updateEmail(e, errors) {
    this.setState({
      email: e.target.value,
      validEmail: errors.length === 0,
    })
  }
  createUserWithEmail() {
    this.props.signInRequested({
      type: NEW_EMAIL,
      data: {
        email: this.state.email,
        history: this.props.history,
      },
    })
  }
  signIn(type, data) {
    this.props.signInRequested({
      type,
      data: {
        provider: data,
        history: this.props.history,
      },
    })
  }
  render() {
    return (
      <Flex align="center" direction="column" justify="center">
        <Box width={1 / 2} my={5}>
          <Heading level={1} color="primary">
            Let&apos;s do this thing
          </Heading>

          <Box mx={3}>
            <Heading level={3}>We just need your email address</Heading>

            <Input
              color="primary"
              name={FIELDS.EMAIL}
              onChange={(e, errors) => this.updateEmail(e, errors)}
              placeholder="your-email@gmail.com"
              type="text"
              value={this.state.email}
              validations={['required', 'email']}
            />

            <Heading level={5}>
              We&apos;ll send you an email to set your password later.
            </Heading>

            <Button
              onClick={() => this.createUserWithEmail()}
              disabled={!this.state.validEmail}
            >
              Get me in
            </Button>
            <br />

            <Heading level={3}>Or social sign-in</Heading>

            <Button
              background="facebook"
              onClick={() => this.signIn(PROVIDER, FACEBOOK)}
            >
              Create account with Facebook
            </Button>

            <Button
              background="github"
              onClick={() => this.signIn(PROVIDER, GITHUB)}
            >
              Create account with Github
            </Button>

            <Button
              background="google"
              onClick={() => this.signIn(PROVIDER, GOOGLE)}
            >
              Create account with Google
            </Button>
          </Box>
        </Box>

        <Box width={1 / 2} my={5}>
          <img alt="DeskLamp" src="/public/images/deskLamp.png" />
        </Box>
      </Flex>
    )
  }
}

CreateAccount.propTypes = {
  history: PropTypes.object,
  signInRequested: PropTypes.func,
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default withRouter(
  connect(mapStateToProps, { signInRequested })(CreateAccount),
)
