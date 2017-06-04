import {Component} from 'react'
// import Authenticated from 'components/yields/Authenticated'
// import UnAuthenticated from 'components/yields/Unauthenticated'
import Profile from 'components/yields/Profile'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import 'normalize.css/normalize.css'
import 'theme/Global.css'

import {connect} from 'react-redux'
// import style from './style'

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <Route path='/profile' component={Profile} />
        {/*<div className={style('container')}>
          {this.props.currentUser.uid ? (
            <Route component={Authenticated} />
          ) : (
            <Route component={UnAuthenticated} />
          )}
        </div>*/}
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(AppComponent)
