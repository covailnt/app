import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'refire/firebase'
import Dropzone from 'react-dropzone'
import { Button, Flexbox, Heading, Icon, Input } from 'components/elements'
import { Rank } from 'components/groups'
import defaultBanner from 'images/profile/defaultBanner.jpg'
import theme from 'theme'
import classes from './ProfileBanner.scss'

const ProfileBanner = ({ bannerURL, displayName, onChange, setProfileBanner, specialty, uid }) => {
  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('file dropped successfully', acceptedFiles)

    const storageRef = firebase.storage().ref()
    const file = acceptedFiles[0]
    const path = storageRef.child(`images/${uid}/banner`)

    path.put(file)
      .then((snapshot) => {
        const URL = snapshot.metadata.downloadURLs[0]

        setProfileBanner(URL)

        firebase.database().ref(`users/${uid}`).update({ bannerURL: URL })
      })
      .catch(err => console.log('error: ', err))
  }

  const onSpecialtyBlur = () => {
    console.log('blurring')
    firebase.database().ref(`users/${uid}`).update({ specialty })
  }

  return (
    <Flexbox direction="column">
      <div className={classes.profileBannerCtn}>

        <Flexbox direction="column">
          <Dropzone
            className={classes.bannerImg}
            multiple={false}
            onDrop={onDrop.bind(this)}
            style={{ backgroundImage: `url(${bannerURL || defaultBanner})` }}
          >
            <div className="banner-caption flex-column">
              <Heading level={3}>Drop cover photo here</Heading>
              <Icon color="black" name="picture-o" />
            </div>
          </Dropzone>
        </Flexbox>

        <Flexbox className={classes.specialty} background="black" direction="column">
          <Heading color="white" level={1}>{displayName}</Heading>

          <Flexbox className={classes.specialtyInput}>
            <Heading color="white" level={4}>Specialty in </Heading>
            <Input
              color="primary"
              onBlur={onSpecialtyBlur}
              onChange={e => onChange(e)}
              placeholder="Enter city or specify Nomad"
              type="text"
              value={specialty}
            />
          </Flexbox>

        </Flexbox>

      </div>

      <Flexbox direction="column" className={classes.rankSocialCtn}>

        <Flexbox className={classes.rankCtn}>
          <Rank color="black" type="Earned" value="005" />
          <Rank color="black" type="Potential" value="99" />
        </Flexbox>

        <Flexbox className={classes.addSocialCtn}>
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

      <Flexbox className={classes.skillsLinksCtn}>
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

    </Flexbox>
  )
}

ProfileBanner.propTypes = {
  bannerImage: PropTypes.string,
}

export default ProfileBanner
