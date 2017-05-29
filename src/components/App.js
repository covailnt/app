import {Component} from 'react';
import Authenticated from 'components/yields/Authenticated'
import UnAuthenticated from 'components/yields/Unauthenticated'
import {
  BrowserRouter as Router
} from 'react-router-dom'

require('normalize.css/normalize.css');
require('styles/App.css');
import {connect} from 'react-redux';

class AppComponent extends Component {
  render() {
    return (
      <Router>
        <div>
          {this.props.currentUser ? (
            <Authenticated />
          ) : (
            <UnAuthenticated />
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps(state) {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(AppComponent)
