import { addDecorator, configure } from '@storybook/react'
import { Box } from 'components/elements'
import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import theme from 'theme'

injectGlobal([], {
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    lineHeight: 1.5,
    margin: 0,
  },
})

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <Box p={3}>{story()}</Box>
  </ThemeProvider>
))

const req = require.context('.', true, /\.js$/)

const load = () => {
  req.keys().forEach(req)
}

configure(load, module)
