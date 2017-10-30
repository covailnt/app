import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flexbox, Input, Heading, Button } from 'components/elements'
import { FirebaseInput } from 'components/wrappers'
import { SignUpTemplate } from 'components/templates'
import { FIELDS } from 'utils/constants'
import classes from './SetDisplayName.scss'

export default class SetDisplayName extends Component {
  render() {
    return (
      <SignUpTemplate>
        <Flexbox
          className={classes.fields}
          direction="column"
          justify="flex-start"
          align="center"
        >
          <Heading level={1} color="primary">
            Boom... You&apos;re in!
          </Heading>
          <div className={classes.form}>
            <Heading level={4}>What do you want to be called on here?</Heading>
            <FirebaseInput
              color="primary"
              name={FIELDS.DISPLAY_NAME}
              placeholder="Name as it will display on your profile"
              type="text"
            />

            <Heading level={4}>What type of work do you do?</Heading>
            <FirebaseInput
              color="primary"
              name={FIELDS.SPECIALTY}
              placeholder="Your Specialty"
              type="text"
            />

            <Heading level={5} color="accent1">
              You&apos;ll be able to add where you work and a few more skills to
              your profile later.
            </Heading>

            <Link to="/signup/create-account/availability">
              <Button>On to step 2 of 2</Button>
            </Link>
          </div>
        </Flexbox>
        <div className={classes.onLampWrapper}>
          <img
            className={classes.onLamp}
            alt="DeskLamp"
            src="/public/images/signup/onLamp.png"
          />
        </div>
      </SignUpTemplate>
    )
  }
}
