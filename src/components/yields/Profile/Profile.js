import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setImage } from 'actions'
import { Button, Flexbox, Heading, Icon, Spinner } from 'components/elements'
import { DropImage, Rank } from 'components/groups'
import { FirebaseInput } from 'components/wrappers'
import { AuthenticatedTemplate } from 'components/templates'
import {
  AVATAR_URL,
  BANNER_URL,
  BEHANCE,
  DRIBBBLE,
  FACEBOOK_URL,
  LINKEDIN_URL,
  PORTFOLIO,
  SKILLS,
  SPECIALTY,
  TWITTER_URL,
} from 'utils/constants'

import classes from './Profile.scss'

class Profile extends Component {
  render() {
    return !this.props.user
      ? <Spinner />
      : (
        <AuthenticatedTemplate>
          <Flexbox direction="column">
            <div className={classes.profileBannerCtn}>

              <DropImage
                height="70vh"
                imageURL={this.props[BANNER_URL]}
                label="Drop Cover Photo Here"
                name={BANNER_URL}
                setImage={this.props.setImage}
                uid={this.props.uid}
                width="100%"
              />

              <Flexbox align="center" className={classes.specialty} background="black" direction="column" justify="center">
                <Heading color="white" level={1}>{this.props.displayName}</Heading>

                <Flexbox align="center">
                  <Heading color="white" level={4}>{SPECIALTY} in </Heading>
                  <FirebaseInput
                    color="primary"
                    name="location"
                    placeholder="Enter city or specify Nomad"
                    type="text"
                  />
                </Flexbox>
              </Flexbox>

            </div>

            <Flexbox direction="column">

              <DropImage
                height="250px"
                imageURL={this.props[AVATAR_URL]}
                label="Drop Profile Photo Here"
                name={AVATAR_URL}
                setImage={this.props.setImage}
                style={{ borderRadius: '50%' }}
                uid={this.props.uid}
                width="250px"
              />

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

                <FirebaseInput
                  color="primary"
                  name={TWITTER_URL}
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
                <FirebaseInput
                  color="primary"
                  name={SKILLS}
                  placeholder="Add a another skill"
                  type="text"
                />
              </Flexbox>

              <Flexbox direction="column" className={classes.portfolio}>
                <Heading color="accent1" level={5}>Portfolio</Heading>

                <Heading color="accent1" level={3}>Portfolio Link</Heading>
                <FirebaseInput
                  color="primary"
                  name={PORTFOLIO}
                  placeholder="Add a link to your portfolio"
                  type="text"
                />

                <Heading color="accent1" level={3}>Behance Stream</Heading>
                <FirebaseInput
                  color="primary"
                  name={BEHANCE}
                  placeholder="Link up your Behance"
                  type="text"
                />

                <Heading color="accent1" level={3}>Dribbble Stream</Heading>
                <FirebaseInput
                  color="primary"
                  name={DRIBBBLE}
                  placeholder="Link up your Dribbble"
                  type="text"
                />
              </Flexbox>

            </Flexbox>

          </Flexbox>
        </AuthenticatedTemplate>
      )
  }
}

Profile.propTypes = {
  bannerURL: PropTypes.string,
  displayName: PropTypes.string,
  image: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  // return state.user
  //   ?
    return {
      [AVATAR_URL]: state.user[AVATAR_URL],
      [BANNER_URL]: state.user[BANNER_URL],
      displayName: state.user.displayName,
      uid: state.user.uid,
    }
    // : {}
}

export default connect(mapStateToProps, { setImage })(Profile)
