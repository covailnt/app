import React, { Component } from 'react'
import { Home, Profile } from 'components/yields'
import { Navbar } from 'components/groups'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import 'normalize.css/normalize.css'
import 'theme/Global.css'

import {connect} from 'react-redux'

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(AppComponent)
