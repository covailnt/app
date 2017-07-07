import React, { Component } from 'react'
import { Home, Profile, SignUp, V2 } from 'components/yields'
import { requireAuth } from 'components/wrappers'
import firebase from 'refire/firebase'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import 'theme/theme.scss'
import 'theme/Global.scss'
import 'theme/normalize.css'

import { connect } from 'react-redux'

class AppComponent extends Component {
  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/v2' component={V2} />
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
  return { user: state.user }
}

export default connect(mapStateToProps)(AppComponent)
