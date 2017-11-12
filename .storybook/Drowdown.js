import { storiesOf } from '@storybook/react'
import { DropDown } from 'components/elements'
import React from 'react'

storiesOf('DropDown', module).add('default', () => (
  <DropDown
    name="Ryan's Dropdown"
    items={["I'm not busy", "I'm kinda busy", "I'm crazy busy"]}
  />
))
