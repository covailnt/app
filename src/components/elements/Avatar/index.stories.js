import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Avatar from '.'

storiesOf('Avatar', module)
  .add('default', () => <Avatar />)
  .add('user ', () => <Avatar src="/public/images/avatar.png" />)
