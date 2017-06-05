import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../src/stores/app'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      {story()}
    </BrowserRouter>
  </Provider>
))

configure(loadStories, module)
