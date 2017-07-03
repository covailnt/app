import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setProfileBanner } from 'actions/setProfileBanner'
import { AuthenticatedTemplate } from 'components/templates'
import { ProfileBanner } from 'components/groups'
import { DonutChart } from 'components/wrappers'

class Profile extends Component {
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
        <ProfileBanner
          bannerImage={this.props.bannerImage}
          setProfileBanner={this.props.setProfileBanner}
          uid={this.props.uid}
        />
      </AuthenticatedTemplate>
    )
  }
}

const mapStateToProps = state => {
  return {
    avatarImage: state.user.photoURL,
    bannerImage: state.user.bannerURL,
    uid: state.user.uid,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setProfileBanner }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
