import { Box, Button, Flex, Heading } from 'components/elements'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Availability extends Component {
  render() {
    return (
      <Flex>
        <Heading level={1} color="primary">
          How Availability Works
        </Heading>
        <Box mb={5}>
          <Heading level={4}>
            You simply answer &quot;This week I am&quot;
          </Heading>
          <img
            src="/public/images/signup/availability.png"
            alt="Availability"
          />
          <Box>
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
          </Box>
        </Box>
      </Flex>
    )
  }
}
