import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DonutChart } from 'components/groups'
import { DropDown } from 'components/wrappers'

class Profile extends Component {
  componentWillMount() {
    if (!this.props.authenticated) {
      this.props.history.push('/')
    }
  }
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

function mapStateToProps(state) {
  return { authenticated: state.authenticated }
}

export default connect(mapStateToProps)(Profile)
