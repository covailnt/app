import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import Home from './routes/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './routes'
import { history } from './store/createStore'

// Themeing/Styling
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {cyan500} from 'material-ui/styles/colors'

// Tap Plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500
  },
  appBar: {
    height: 50
  }
})

export default class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <ConnectedRouter history={history}>
            <Routes />
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
}
