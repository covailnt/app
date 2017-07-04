import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setProfileBanner } from 'actions/setProfileBanner'
import { setProfileSpecialty } from 'actions/setProfileSpecialty'
import { Spinner } from 'components/elements'
import { ProfileBanner } from 'components/groups'
import { DonutChart } from 'components/wrappers'
import { AuthenticatedTemplate } from 'components/templates'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      specialty: '' || props.specialty,
    }
  }
  specialtyOnChange(e) {
    this.setState({ specialty: e.target.value })
  }
  render() {
    const donutChartProps = {
      avatarImage: this.props.image,
      items: [
        'Not Working',
        'Really Light',
        'Kinda Light',
        'Not That Busy',
        'Kinda Busy',
        'Really Busy',
        'Slammed',
      ],
      name: 'Profile Dropdown',
      placeholder: 'How busy are you?',
      size: 170,
      strokeWidth: 50,
    }
    return this.props.user
      ? (
        <AuthenticatedTemplate
          donutchart={<DonutChart {...donutChartProps} />}
        >
          <ProfileBanner
            bannerURL={this.props.bannerURL}
            displayName={this.props.displayName}
            onChange={e => this.specialtyOnChange(e)}
            setProfileBanner={this.props.setProfileBanner}
            specialty={this.state.specialty}
            uid={this.props.uid}
          />
        </AuthenticatedTemplate>
      )
      : <Spinner />
  }
}

const mapStateToProps = (state) => {
  return state.user
    ? {
      avatarImage: state.user.photoURL,
      bannerURL: state.user.bannerURL,
      displayName: state.user.displayName,
      specialty: state.user.specialty,
      uid: state.user.uid,
    }
    : {}
}

export default connect(mapStateToProps, { setProfileBanner, setProfileSpecialty })(Profile)
