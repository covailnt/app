import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Flexbox, Button, Heading, Input } from 'components/elements'
import { SignUpTemplate } from 'components/templates'
import DeskLamp from 'images/signup/deskLamp.png'
import classes from './CreateAccount.scss'

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
      validEmail: (errors.length === 0),
    })
  }
  render() {
    return (
      <SignUpTemplate>
        <Flexbox className={classes.fields} direction="column" justify="center" align="center">
          <Heading level={1} color="primary">Let&apos;s do this thing</Heading>
          <div className={classes.form}>
            <Heading level={3}>We just need your email address</Heading>
            <Input
              type="text"
              name="email"
              color="lightGray"
              onChange={(e, errors) => this.updateEmail(e, errors)}
              value={this.state.email}
              placeholder="user@example.com"
              validations={['required', 'email']}
            />
            <Heading level={5}>We&apos;ll send you an email to set your password later.</Heading>
            <Button
              disabled={(!this.state.validEmail)}
              onClick={() => createUserWithEmail(this.state.email, this)}
            >Get me in</Button><br />
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
          </div>
        </Flexbox>

        <div className={classes.deskLampWrapper}>
          <img className={classes.deskLamp} alt="DeskLamp" src={DeskLamp} />
        </div>
      </SignUpTemplate>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default withRouter(connect(mapStateToProps)(CreateAccount))
