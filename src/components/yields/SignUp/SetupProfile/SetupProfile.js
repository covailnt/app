import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Heading, Button } from 'components/elements'
import setup from 'images/signup/setup.png'

export default class Availability extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <img src={setup} alt="Setup Profile"/>
      </div>
    )
  }
}