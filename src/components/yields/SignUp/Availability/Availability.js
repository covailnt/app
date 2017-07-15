import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Heading, Button } from 'components/elements'
import availability from 'images/signup/availability.png'

export default class Availability extends Component {
  render() {
    return (
      <div>
        <Heading level={1} color="primary">How Availability Works</Heading>
        <Heading level={4}>You simply answer &quote;This week I am&quote;</Heading>
        <img src={availability} alt="Availability" />
        <Heading level={4}>Your availablity is visible where ever your profile photo shows across the application.</Heading>
        <Heading level={5}>Does a week seem like the wrong timeframe for your type of work? You&apos;ll be able to change this in your settings soon.</Heading>
        <Link to="/signup/create-account/step-2"><Button>Gotcha, Show me my profile</Button></Link>
      </div>
    )
  }
}
