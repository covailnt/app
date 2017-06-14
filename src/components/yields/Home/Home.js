import React, { Component } from 'react'
import { Heading } from 'components/elements'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Heading level={1}>You are Home</Heading>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}
