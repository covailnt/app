import { action, storiesOf } from '@storybook/react'
import React from 'react'

import { IconButton } from '../src'

storiesOf('IconButton', module).add('Index', () => (
  <IconButton name="closeLight" onClick={action('clicked')} />
))
