import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Heading, Button } from 'components/elements'

import theme from 'theme'

export default class SetDisplayName extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Heading level={1} color='primary'>Boom... You're in!</Heading>
        <Heading level={4}>What do you want to be called on here?</Heading>
        <Input type='text' placeholder='Name as it will display on your profile' />
        <Heading level={4}>What type of work do you do?</Heading>
        <Input type='text' placeholder='Your Specialty' />
        <Heading level={5}>You'll be able to add where you work and a few more skills to your profile later.</Heading>
        <Link to='/signup/create-account/availability'><Button>On to step 2 of 2</Button></Link>
      </div>
    )
  }
}
