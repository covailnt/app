import React, { Component } from 'react'
import { Home, Profile } from 'components/yields'
import { NavbarCtn, requireAuth } from 'components/wrappers'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import 'normalize.css/normalize.css'
import 'theme/Global.css'

import {connect} from 'react-redux'

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarCtn />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={requireAuth(Profile)} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps)(AppComponent)
