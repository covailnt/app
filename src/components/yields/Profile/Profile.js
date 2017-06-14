import React, { Component } from 'react'
import { DonutChart } from 'components/groups'
import { DropDown } from 'components/wrappers'
import { connect } from 'react-redux'
import avatar from 'images/avatar.png'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = { value: this.setDonutValue('Kinda Busy') }

    this.updateStatus = this.updateStatus.bind(this)
  }
  setDonutValue(status) {
    switch(status) {
      case 'Not Working':
        return 0

      case 'Really Light':
        return 12.5

      case 'Kinda Light':
        return 25

      case 'Not That Busy':
        return 37.5

      case 'Kinda Busy':
        return 62.5

      case 'Really Busy':
        return 75

      case 'Slammed':
        return 100

      default:
        return 75
    }
  }
  updateStatus(status) {
    console.log('status')
    this.setState({ value: this.setDonutValue(status) })
  }
  render() {
    return (
      <div id='profile-ctn'>
        <DonutChart size={170} strokeWidth={50} value={this.state.value} image={this.props.image} />
        <DropDown
          name="Ryan's Dropdown"
          items={[
            'Not Working',
            'Really Light',
            'Kinda Light',
            'Not That Busy',
            'Kinda Busy',
            'Really Busy',
            'Slammed'
          ]}
          placeholder='How busy are you?'
          updateStatus={this.updateStatus}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { image: avatar || state.user.photoURL }
}

export default connect(mapStateToProps)(Profile)

