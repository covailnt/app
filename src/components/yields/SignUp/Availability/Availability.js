import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Heading, Button } from 'components/elements'
import { SignUpTemplate } from 'components/templates'
import availability from 'images/signup/availability.png'
import classes from './Availability.scss'

export default class Availability extends Component {
  render() {
    return (
      <SignUpTemplate>
        <Heading level={1} color="primary">
          How Availability Works
        </Heading>
        <div className={classes.content}>
          <Heading level={4}>
            You simply answer &quot;This week I am&quot;
          </Heading>
          <img src={availability} alt="Availability" />
          <div className={classes.bottomCtn}>
            <Heading level={4}>
              Your availablity is visible wherever your profile photo shows
              across the application
            </Heading>

            <Heading level={5} color="accent1">
              Does a week seem like the wrong timeframe for your type of work?
              You&apos;ll be able to change this in your settings soon.
            </Heading>

            <Link to="/profile">
              <Button>Gotcha, Show me my profile</Button>
            </Link>
          </div>
        </div>
      </SignUpTemplate>
    )
  }
}
