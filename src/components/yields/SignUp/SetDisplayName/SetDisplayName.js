import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Flexbox, Input, Heading, Button } from 'components/elements'
import { CreateAccountTemplate } from 'components/templates'
import OnLamp from 'images/signup/onLamp.png'
import classes from './SetDisplayName.scss'

export default class SetDisplayName extends Component {
  render() {
    return (
      <CreateAccountTemplate>
        <Flexbox className={classes.fields} direction="column" justify="flex-start" align="center">
          <Heading level={1} color="primary">Boom... You&apos;re in!</Heading>
          <div className={classes.form}>
            <Heading level={4}>What do you want to be called on here?</Heading>
            <Input type="text" placeholder="Name as it will display on your profile" />
            <Heading level={4}>What type of work do you do?</Heading>
            <Input type="text" placeholder="Your Specialty" />
            <Heading level={5} color="accent1">
              You&apos;ll be able to add where you work and a few more skills to your profile later.
            </Heading>
            <Link to="/signup/create-account/availability"><Button>On to step 2 of 2</Button></Link>
          </div>
        </Flexbox>
        <div className={classes.onLampWrapper}>
          <img className={classes.onLamp} alt="DeskLamp" src={OnLamp} />
        </div>
      </CreateAccountTemplate>
    )
  }
}
