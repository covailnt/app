import React, { Component } from 'react'
import { AuthenticatedTemplate } from 'components/templates'
import { DonutChart } from 'components/wrappers'
import { connect } from 'react-redux'
import avatar from 'images/avatar.png'

class Profile extends Component {
  render() {
    const donutChartProps = {
      image: this.props.image,
      items: [
        'Not Working',
        'Really Light',
        'Kinda Light',
        'Not That Busy',
        'Kinda Busy',
        'Really Busy',
        'Slammed'
      ],
      name: 'Profile Dropdown',
      placeholder: 'How busy are you?',
      size: 170,
      strokeWidth: 50,
    }
    return (
      <AuthenticatedTemplate
        donutchart={<DonutChart {...donutChartProps} />}
      >
        <h1>hello</h1>
      </AuthenticatedTemplate>
    )
  }
}

const mapStateToProps = state => {
  return { image: avatar || state.user.photoURL }
}

export default connect(mapStateToProps)(Profile)

