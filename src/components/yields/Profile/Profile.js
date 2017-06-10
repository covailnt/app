import React, { Component } from 'react'
import { DonutChart } from 'components/groups'
import { DropDown } from 'components/wrappers'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <DropDown
          name="Ryan's Dropdown"
          items={['I\'m not busy', 'I\'m kinda busy', 'I\'m crazy busy']}
          placeholder='How busy are you?' />
        <DonutChart size={170} strokeWidth={50} value={55} />
      </div>
    )
  }
}

