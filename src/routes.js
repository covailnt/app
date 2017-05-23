import React from 'react'
import { Route, Switch } from 'react-router-dom'

// We only need to import the modules necessary for initial render
// import CoreLayout from '../templates/CoreLayout/CoreLayout'
import Home from './yields/Home'
import Login from './yields/Login'
import Signup from './yields/Signup'
import Project from './yields/Project'
import Projects from './yields/Projects'
import Account from './yields/Account'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/account' component={Account} />
      <Route path='/projects/:id' component={Project} />
      <Route path='/projects' component={Projects} />
      <Route path='/signup' component={Signup} />
    </Switch>
  </div>
)

export default Routes

// export const createRoutes = (store) => ({
//   path: '/',
//   component: CoreLayout,
//   indexRoute: Home,
//   childRoutes: [
//     AccountRoute(store),
//     LoginRoute(store),
//     SignupRoute(store),
//     ProjectsRoute(store)
//   ]
// })

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

// export default createRoutes
