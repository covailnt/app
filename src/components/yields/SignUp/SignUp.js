import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CreateAccount from './CreateAccount'
import LandingPage from './LandingPage'

export default class SignUp extends Component {
  render() {
    return (
      <Switch>
        <Route path='/signup/create-profile' component={CreateAccount} />
        <Route path='/signup' component={LandingPage} />
      </Switch>
    )
  }
}

