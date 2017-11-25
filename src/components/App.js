import { Home, Profile, SignUp } from 'components/templates'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import appStore from 'reducers'
import { ThemeProvider } from 'styled-components'
import theme from 'theme'
import { PrivateRoute } from 'utils'

import { unsubscribeAuth, unsubscribePreload } from '../'

export default class App extends Component {
  componentDidMount() {
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
              <PrivateRoute
                authed={appStore.getState().user}
                path="/profile"
                component={Profile}
              />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </ThemeProvider>
        </Router>
      </Provider>
    )
  }
}
