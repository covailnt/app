import { setImage } from 'actions'
import { Button, Heading, Icon } from 'components/elements'
import { DropImage, Rank } from 'components/groups'
import { AuthenticatedTemplate } from 'components/partials'
import { FirebaseInput } from 'components/templates'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Flex } from 'rebass'
import { FIELDS, SOCIAL, URL } from 'utils/constants'

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
        <Flex direction="column">
          <div className={classes.profileBannerCtn}>
            <DropImage
              defaultImage="/public/images/profile/defaultBanner.jpg"
              imageURL={this.props[FIELDS.BANNER_URL]}
              setImage={this.props.setImage}
              imageName={FIELDS.BANNER_URL}
              label="Drop cover photo here"
              className={classes.editBannerPicture}
              uid={this.props.uid}
              height="70vh"
              width="100%"
            />

            <Flex
              className={classes.profileTitle}
              direction="column"
              justify="center"
            >
              <Heading align="center" color="white" level={1}>
                {this.props.displayName}
              </Heading>

              <Flex className={classes.profileTitleCtn}>
                <FirebaseInput
                  label={`${FIELDS.SPECIALTY} in`}
                  color="primary"
                  name={FIELDS.LOCATION}
                  placeholder="Enter city or specify Nomad"
                  type="text"
                />
              </Flex>
            </Flex>
          </div>

          <div className={classes.profileSummaryCtn}>
            <div className={classes.editProfilePictureCtn}>
              <DropImage
                defaultImage="/public/images/avatar.png"
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
              <Flex justify="flex-start" wrap>
                <div className={classes.summaryStats}>
                  <Rank color="black" type="Earned" value="005" />
                  <Rank color="black" type="Potential" value="99" />
                </div>

                <Button className="chatButton">Open Chat</Button>

                <Flex justify="flex-start" className={classes.socialLinks}>
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
                </Flex>
              </Flex>
            </div>
          </div>

          <Flex className={classes.statusCtn} justify="space-around">
            <Heading color="primary" level={3}>
              Your availability status appears here
            </Heading>
            <Button>Send Collab Request</Button>
          </Flex>

          <Flex className={classes.portfolioCtn} justify="space-around">
            <Flex direction="column" className={classes.skills}>
              <Heading color="accent1" level={5}>
                Skills
              </Heading>

              <FirebaseInput
                color="primary"
                name={FIELDS.SPECIALTY}
                placeholder="Add a another skill"
                type="text"
                label="Specialty"
              />
            </Flex>

            <Flex direction="column" className={classes.portfolio}>
              <Heading color="accent1" level={5}>
                Portfolio
              </Heading>

              <FirebaseInput
                color="primary"
                name={FIELDS.PORTFOLIO}
                placeholder="Add a link to your portfolio"
                type="text"
                label="Portfolio Link"
              />

              <FirebaseInput
                color="primary"
                name={FIELDS.BEHANCE_URL}
                placeholder="Link up your Behance"
                type="text"
                label="Behance Stream"
              />

              <FirebaseInput
                color="primary"
                name={FIELDS.DRIBBBLE_URL}
                placeholder="Link up your Dribbble"
                type="text"
                label="Dribbble Stream"
              />
            </Flex>
          </Flex>
        </Flex>
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

const mapStateToProps = state => {
  return {
    [FIELDS.AVATAR_URL]: state.user[FIELDS.AVATAR_URL],
    [FIELDS.BANNER_URL]: state.user[FIELDS.BANNER_URL],
    displayName: state.user.displayName,
    uid: state.user.uid,
  }
}

export default connect(mapStateToProps, { setImage })(Profile)
