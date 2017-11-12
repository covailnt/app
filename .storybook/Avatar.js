import { storiesOf } from '@storybook/react'
import { Avatar } from 'components/elements'
import React from 'react'

storiesOf('Avatar', module)
  .add('default', () => <Avatar />)
  .add('user ', () => <Avatar src="/public/images/avatar.png" />)
