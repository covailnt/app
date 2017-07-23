import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setProfileBanner } from 'actions'
import { Button, Flexbox, Heading, Icon, Input, Spinner } from 'components/elements'
import { ProfileBanner, Rank } from 'components/groups'
import { DonutChart, FirebaseInput } from 'components/wrappers'
import { AuthenticatedTemplate } from 'components/templates'
import classes from './Profile.scss'

class Profile extends Component {
  componentDidUpdate() {
    console.log('profile updating')
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
    return !this.props.user
      ? <Spinner />
      : (
        <AuthenticatedTemplate
          donutchart={<DonutChart {...donutChartProps} />}
        >
          {/*<Flexbox direction="column">
            <div className={classes.profileBannerCtn}>

              <ProfileBanner
                bannerURL={this.props.bannerURL}
                displayName={this.props.displayName}
                setProfileBanner={this.props.setProfileBanner}
                uid={this.props.uid}
              />*/}

              <Flexbox align="center" className={classes.specialty} background="black" direction="column" justify="center">
                <Heading color="white" level={1}>{this.props.displayName}</Heading>

                <Flexbox align="center">
                  <Heading color="white" level={4}>Specialty in </Heading>
                  <FirebaseInput color="primary" name="specialty" placeholder="specialty" />
                </Flexbox>
              </Flexbox>

            {/*</div>

            <Flexbox direction="column">

              <Flexbox justify="center">
                <Rank color="black" type="Earned" value="005" />
                <Rank color="black" type="Potential" value="99" />
              </Flexbox>

              <Flexbox justify="center">
                <span className="fa-stack fa-lg">
                  <Icon className="fa-stack-2x" color="primary" name="circle" />
                  <Icon className="fa-stack-1x" color="white" name="facebook" />
                </span>
                <span className="fa-stack fa-lg">
                  <Icon className="fa-stack-2x" color="primary" name="circle" />
                  <Icon className="fa-stack-1x" color="white" name="linkedin" />
                </span>
                <span className="fa-stack fa-lg">
                  <Icon className="fa-stack-2x" color="primary" name="circle" />
                  <Icon className="fa-stack-1x" color="white" name="twitter" />
                </span>

                <Input
                  color="primary"
                  placeholder="Add a Social Network"
                  type="text"
                />
              </Flexbox>

            </Flexbox>

            <Flexbox className={classes.statusCtn} background="white">
              <Heading color="primary" level={3}>Your availability status appears here</Heading>
              <Button background="white" color="accent1" >Send Collab Request</Button>
            </Flexbox>

            <Flexbox className={classes.skillsLinksCtn} justify="space-around">
              <Flexbox direction="column" className={classes.skills}>
                <Heading color="accent1" level={5}>Skills</Heading>
                <Heading color="accent1" level={3}>Specialty</Heading>
                <Input
                  color="primary"
                  placeholder="Add another skill"
                  type="text"
                />
              </Flexbox>

              <Flexbox direction="column" className={classes.portfolio}>
                <Heading color="accent1" level={5}>Portfolio</Heading>

                <Heading color="accent1" level={3}>Portfolio Link</Heading>
                <Input
                  color="primary"
                  placeholder="Add a link to your portfolio"
                  type="text"
                />

                <Heading color="accent1" level={3}>Behance Stream</Heading>
                <Input
                  color="primary"
                  placeholder="Link up your Behance"
                  type="text"
                />

                <Heading color="accent1" level={3}>Dribbble Stream</Heading>
                <Input
                  color="primary"
                  placeholder="Link up your Dribbble"
                  type="text"
                />
              </Flexbox>

            </Flexbox>

          </Flexbox>*/}
        </AuthenticatedTemplate>
      )
  }
}

Profile.propTypes = {
  bannerURL: PropTypes.string,
  displayName: PropTypes.string,
  image: PropTypes.string,
  setProfileBanner: PropTypes.func.isRequired,
  uid: PropTypes.string,
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  return state.user
    ? {
      avatarImage: state.user.photoURL,
      bannerURL: state.user.bannerURL,
      displayName: state.user.displayName,
      uid: state.user.uid,
    }
    : {}
}

export default connect(mapStateToProps, { setProfileBanner })(Profile)
