import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1>You are Home</h1>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}
