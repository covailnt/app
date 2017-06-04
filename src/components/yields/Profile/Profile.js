import React, { Component } from 'react'
import { ProfileDonut, DropDown } from 'components/wrappers'

export default class Profile extends Component {
  render() {
    return (
      <div>
        <DropDown
          name="Ryan's Dropdown"
          items={['I\'m not busy', 'I\'m kinda busy', 'I\'m crazy busy']} />
        <ProfileDonut />
      </div>
    )
  }
}
