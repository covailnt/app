import React, { Component } from 'react'
import { Home, Profile, SignUp } from 'components/yields'
import { requireAuth } from 'components/wrappers'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import 'normalize.css/normalize.css'
import 'theme/theme.scss'
import 'theme/Global.scss'

import {connect} from 'react-redux'

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={requireAuth(Profile)} />
            <Route path='/signup' component={SignUp} />
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
