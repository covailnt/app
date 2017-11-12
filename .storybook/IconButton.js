import { action, storiesOf } from '@storybook/react'
import { IconButton } from 'components/elements'
import React from 'react'

storiesOf('IconButton', module).add('Index', () => (
  <IconButton name="closeLight" onClick={action('clicked')} />
))
