import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setImage } from 'actions'
import { Button, Flexbox, Heading, Icon, Spinner } from 'components/elements'
import { DropImage, Rank } from 'components/groups'
import { FirebaseInput } from 'components/wrappers'
import { AuthenticatedTemplate } from 'components/templates'
import { FIELDS, SOCIAL, URL } from 'utils/constants'
import avatar from 'images/avatar.png'
import banner from 'images/profile/defaultBanner.jpg'

import classes from './Profile.scss'

class Profile extends Component {
  constructor() {
    super()

    this.state = {
      activeSocial: SOCIAL.FACEBOOK,
    }
  }
  setActiveIcon(e) {
    this.setState({ activeSocial: e.target.id })
  }
  render() {
    return (
      <AuthenticatedTemplate>
        <Flexbox direction="column">
          <div className={classes.profileBannerCtn}>
            <div className={classes.editProfileBannerCtn}>
              <DropImage
                defaultImage={banner}
                imageURL={this.props[FIELDS.BANNER_URL]}
                setImage={this.props.setImage}
                imageName={FIELDS.BANNER_URL}
                label="Drop cover photo here"
                className={classes.editBannerPicture}
                uid={this.props.uid}
                height="70vh"
                width="100%"
              />
            </div>

            <Flexbox align="left" className={classes.profileTitle} direction="column" justify="center">
              <div className={classes.profileTitleCtn}>
                <Heading color="white" level={1}>{this.props.displayName}</Heading>

                <Flexbox align="center">
                  <p>{FIELDS.SPECIALTY} in </p>
                  <FirebaseInput
                    color="primary"
                    name={FIELDS.LOCATION}
                    placeholder="Enter city or specify Nomad"
                    type="text"
                  />
                </Flexbox>
              </div>
            </Flexbox>

          </div>

          <div className={classes.profileSummaryCtn}>

            <div className={classes.editProfilePictureCtn}>
              <DropImage
                defaultImage={avatar}
                imageURL={this.props[FIELDS.AVATAR_URL]}
                uid={this.props.uid}
                imageName={FIELDS.AVATAR_URL}
                setImage={this.props.setImage}
                label="Drop profile photo here"
                style={{
                  borderRadius: '50%',
                  color: 'white',
                }}
                height="250px"
                width="250px"
              />
            </div>

            <div className={classes.summaryText}>
              <Flexbox justify="flex-start" flexWrap="wrap">

                <div className={classes.summaryStats}>
                  <Rank color="black" type="Earned" value="005" />
                  <Rank color="black" type="Potential" value="99" />
                </div>

                <Button className="chatButton" disabled="disabled">Open Chat</Button>

                <Flexbox justify="flex-start" className={classes.socialLinks} >
                  <span className="fa-stack fa-lg">
                    <Icon
                      border={this.state.activeSocial === SOCIAL.FACEBOOK}
                      className="fa-stack-2x"
                      color="primary"
                      name="circle"
                    />
                    <Icon
                      className="fa-stack-1x"
                      color="white"
                      id={SOCIAL.FACEBOOK}
                      name={SOCIAL.FACEBOOK}
                      onClick={e => this.setActiveIcon(e)}
                    />
                  </span>
                  <span className="fa-stack fa-lg">
                    <Icon
                      border={this.state.activeSocial === SOCIAL.LINKEDIN}
                      className="fa-stack-2x"
                      color="primary"
                      name="circle"
                    />
                    <Icon
                      className="fa-stack-1x"
                      color="white"
                      id={SOCIAL.LINKEDIN}
                      name={SOCIAL.LINKEDIN}
                      onClick={e => this.setActiveIcon(e)}
                    />
                  </span>
                  <span className="fa-stack fa-lg">
                    <Icon
                      border={this.state.activeSocial === SOCIAL.TWITTER}
                      className="fa-stack-2x"
                      color="primary"
                      name="circle"
                    />
                    <Icon
                      className="fa-stack-1x"
                      color="white"
                      id={SOCIAL.TWITTER}
                      name={SOCIAL.TWITTER}
                      onClick={e => this.setActiveIcon(e)}
                    />
                  </span>

                  <FirebaseInput
                    color="primary"
                    name={`${this.state.activeSocial.toLowerCase()}${URL}`}
                    placeholder={`Add a ${this.state.activeSocial} Account`}
                    type="text"
                  />
                </Flexbox>
              </Flexbox>
            </div>
          </div>

          <Flexbox className={classes.statusCtn} justify="space-around" background="white">
            <Heading color="primary" level={3}>Your availability status appears here</Heading>
            <Button disabled="disabled">Send Collab Request</Button>
          </Flexbox>

          <Flexbox className={classes.portfolioCtn} justify="space-around">
            <Flexbox direction="column" className={classes.skills}>
              <Heading color="accent1" level={5}>Skills</Heading>

              <Heading color="accent1" level={3}>Specialty</Heading>
              <FirebaseInput
                color="primary"
                name={FIELDS.SPECIALTY}
                placeholder="Add a another skill"
                type="text"
              />
            </Flexbox>

            <Flexbox direction="column" className={classes.portfolio}>
              <Heading color="accent1" level={5}>Portfolio</Heading>

              <Heading color="accent1" level={3}>Portfolio Link</Heading>
              <FirebaseInput
                color="primary"
                name={FIELDS.PORTFOLIO}
                placeholder="Add a link to your portfolio"
                type="text"
              />

              <Heading color="accent1" level={3}>Behance Stream</Heading>
              <FirebaseInput
                color="primary"
                name={FIELDS.BEHANCE_URL}
                placeholder="Link up your Behance"
                type="text"
              />

              <Heading color="accent1" level={3}>Dribbble Stream</Heading>
              <FirebaseInput
                color="primary"
                name={FIELDS.DRIBBBLE_URL}
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
  setImage: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    [FIELDS.AVATAR_URL]: state.user[FIELDS.AVATAR_URL],
    [FIELDS.BANNER_URL]: state.user[FIELDS.BANNER_URL],
    displayName: state.user.displayName,
    uid: state.user.uid,
  }
}

export default connect(mapStateToProps, { setImage })(Profile)
