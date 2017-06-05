import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from '.'

storiesOf('Atom', module)
  .add('default', () => (
    <Button>Hello</Button>
  ))
