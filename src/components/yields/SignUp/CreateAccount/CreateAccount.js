import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signInRequested } from 'actions'
import { withRouter } from 'react-router-dom'
import { Button, Flexbox, Heading, Input } from 'components/elements'
import { SignUpTemplate } from 'components/templates'
import { FIELDS, NEW_EMAIL } from 'utils/constants'
import DeskLamp from 'images/signup/deskLamp.png'
import classes from './CreateAccount.scss'

class CreateAccount extends Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }
  updateEmail(e) {
    this.setState({ email: e.target.value })
  }
  submitEmail() {
    this.props.signInRequested({ type: NEW_EMAIL, data: })
  }
  render() {
    return (
      <SignUpTemplate>
        <Flexbox className={classes.fields} direction="column" justify="center" align="center">
          <Heading level={1} color="primary">Let&apos;s do this thing</Heading>
          <div className={classes.form}>
            <Heading level={3}>We just need your email address</Heading>
            <Input
              color="primary"
              name={FIELDS.EMAIL}
              onChange={e => this.updateEmail(e)}
              placeholder="your-email@gmail.com"
              type="text"
              value={this.state.email}
            />
            <Heading level={5}>We&apos;ll send you an email to set your password later.</Heading>
            <Button onClick={() => createUserWithEmail(this.state.email, this)}>Get me in</Button><br />
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

export default withRouter(connect(mapStateToProps, { signInRequested })(CreateAccount))
