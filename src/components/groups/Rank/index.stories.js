import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Rank from '.'

storiesOf('Rank', module)
  .add('Rank Earned', () => (
    <Rank type='Earned' value='005' />
  ))
  .add('Rank Potential', () => (
    <Rank type='Potential' value='99' />
  ))
