import { Box, Button, Flex, Heading } from 'components/elements'
import { FirebaseInput } from 'components/partials'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FIELDS } from 'utils/constants'

export default class SetDisplayName extends Component {
  render() {
    return (
      <Flex direction="column" justify="flex-start" align="center">
        <Box width={1 / 2} my={5}>
          <Heading level={1} color="primary">
            Boom... You&apos;re in!
          </Heading>

          <Box mx={2}>
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
          </Box>
        </Box>
        <Box width={1 / 2} my={5}>
          <img alt="DeskLamp" src="/static/images/signup/onLamp.png" />
        </Box>
      </Flex>
    )
  }
}
