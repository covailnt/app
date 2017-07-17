import React from 'react'
import { Home, Profile, SignUp } from 'components/yields'
import { requireAuth } from 'components/wrappers'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import 'theme/theme.scss'
import 'theme/Global.scss'
import 'theme/normalize.css'

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={requireAuth(Profile)} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  </Router>
)

export default App
