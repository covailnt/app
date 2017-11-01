import React, { Component } from 'react'
import { Home, Profile, SignUp } from 'components/yields'
import { requireAuth } from 'components/templates'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import appStore from 'reducers'

import 'theme/normalize.css'
import 'theme/Global.scss'
import theme from 'theme'
import { ThemeProvider } from 'styled-components'

import { unsubscribeAuth, unsubscribePreload } from '../'

export default class App extends Component {
  componentDidMount() {
    console.log(
      'Unsubscribing from Firebase_Auth_Change and Preload_Store Observers',
    )
    unsubscribeAuth()
    unsubscribePreload()
  }
  render() {
    return (
      <Provider store={appStore}>
        <Router>
          <ThemeProvider theme={theme}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={requireAuth(Profile)} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    )
  }
}
