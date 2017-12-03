import {
  Absolute,
  Button,
  Heading,
  IconButton,
  Relative,
} from '~/components/elements'
import { Box, Flex } from '~/components/elements'
import { DropImage, Rank } from '~/components/groups'
import { FirebaseInput } from '~/components/partials'
import { connectRedux } from '~/store'
import { setImage } from '~/store/actions'
import { FIELDS, SOCIAL, URL } from '~/utils/constants'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Profile extends Component {
  static async getInitialProps({ res, store }) {
    // Reroute to home page if there is no user
    if (!store.getState().user) {
      // res.redirect('/home')
    }
  }
  constructor() {
    super()

    this.state = {
      activeSocial: SOCIAL.FACEBOOK,
    }
  }
  setActiveIcon(e) {
    this.setState({ activeSocial: e.currentTarget.id })
  }
  render() {
    return (
      <Flex direction="column">
        <Relative>
          <DropImage
            circle
            defaultImage="/static/images/profile/defaultBanner.jpg"
            imageURL={this.props[FIELDS.BANNER_URL]}
            setImage={this.props.setImage}
            imageName={FIELDS.BANNER_URL}
            label="Drop cover photo here"
            uid={this.props.uid}
            height="70vh"
            width="100%"
          />

          <Absolute
            bg="transparent4"
            bottom={0}
            left="50%"
            translateX="-50%"
            w={1}
          >
            <Flex align="center" direction="column" justify="center">
              <Heading align="center" color="white" level={1}>
                {this.props.displayName}
              </Heading>

              <Box ml="-56px" py={2}>
                <FirebaseInput
                  label={`${FIELDS.SPECIALTY} in`}
                  labelColor="white"
                  labelPosition="left"
                  labelSize={2}
                  name={FIELDS.LOCATION}
                  placeholder="Enter city or specify Nomad"
                  type="text"
                  width="250px"
                />
              </Box>
            </Flex>
          </Absolute>
        </Relative>

        <div>
          <Absolute color="white" mt={-6} pl={4}>
            <DropImage
              circle
              defaultImage="/static/images/avatar.png"
              imageURL={this.props[FIELDS.AVATAR_URL]}
              uid={this.props.uid}
              imageName={FIELDS.AVATAR_URL}
              setImage={this.props.setImage}
              label="Drop profile photo here"
              style={{
                borderRadius: '50%',
              }}
              height="250px"
              width="250px"
            />
          </Absolute>

          <Flex direction="column" mt={4}>
            <Flex align="center" justify="center">
              <Rank color="black" type="Earned" value="005" />
              <Rank color="black" type="Potential" value="99" />

              <Button className="chatButton">Open Chat</Button>
            </Flex>

            <Flex align="flex-start" justify="center" my={4}>
              <IconButton
                fill={
                  this.state.activeSocial === SOCIAL.FACEBOOK
                    ? 'facebook'
                    : 'primary'
                }
                id={SOCIAL.FACEBOOK}
                my={1}
                name="facebook"
                onClick={e => this.setActiveIcon(e)}
              />

              <IconButton
                fill={
                  this.state.activeSocial === SOCIAL.LINKEDIN
                    ? 'linkedin'
                    : 'primary'
                }
                color="white"
                id={SOCIAL.LINKEDIN}
                my={1}
                name="linkedin"
                onClick={e => this.setActiveIcon(e)}
              />

              <IconButton
                fill={
                  this.state.activeSocial === SOCIAL.TWITTER
                    ? 'twitter'
                    : 'primary'
                }
                color="white"
                id={SOCIAL.TWITTER}
                my={1}
                name="twitter"
                onClick={e => this.setActiveIcon(e)}
              />

              <FirebaseInput
                ml={4}
                name={`${this.state.activeSocial.toLowerCase()}${URL}`}
                placeholder={`Add a ${this.state.activeSocial} Account`}
                type="text"
              />
            </Flex>
          </Flex>
        </div>

        <Flex justify="space-around">
          <Heading color="primary" level={3}>
            Your availability status appears here
          </Heading>
          <Button>Send Collab Request</Button>
        </Flex>

        <Flex justify="space-around" mb={2} p={3}>
          <Flex direction="column">
            <Heading color="accent1" level={5}>
              Skills
            </Heading>

            <FirebaseInput
              name={FIELDS.SPECIALTY}
              placeholder="Add a another skill"
              type="text"
              label="Specialty"
            />
          </Flex>

          <Flex direction="column">
            <Heading color="accent1" level={5}>
              Portfolio
            </Heading>

            <FirebaseInput
              name={FIELDS.PORTFOLIO}
              placeholder="Add a link to your portfolio"
              type="text"
              label="Portfolio Link"
            />

            <FirebaseInput
              name={FIELDS.BEHANCE_URL}
              placeholder="Link up your Behance"
              type="text"
              label="Behance Stream"
            />

            <FirebaseInput
              name={FIELDS.DRIBBBLE_URL}
              placeholder="Link up your Dribbble"
              type="text"
              label="Dribbble Stream"
            />
          </Flex>
        </Flex>
      </Flex>
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
  console.log('user', state)
  if (state.user) {
    return {
      [FIELDS.AVATAR_URL]: state.user[FIELDS.AVATAR_URL],
      [FIELDS.BANNER_URL]: state.user[FIELDS.BANNER_URL],
      displayName: state.user.displayName,
      uid: state.user.uid,
    }
  } else {
    return { uid: null }
  }
}

export default connectRedux(mapStateToProps, { setImage })(Profile)
