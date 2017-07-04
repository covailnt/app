import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'refire/firebase'
import Dropzone from 'react-dropzone'
import { Heading, Icon, Input } from 'components/elements'
import defaultBanner from 'images/profile/defaultBanner.jpg'
import theme from 'theme'

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
    <div className="profile-banner-ctn">
      <Dropzone
        className="flex-column banner-img"
        multiple={false}
        onDrop={onDrop.bind(this)}
        style={{ backgroundImage: `url(${bannerURL || defaultBanner})` }}
      >
        <div className="banner-caption flex-column">
          <Heading level={3}>Drop cover photo here</Heading>
          <Icon color="black" name="picture-o" />
        </div>
      </Dropzone>

      <div className="flex-column specialty" style={{ backgroundColor: theme.color.black }}>
        <Heading color="white" level={1}>{displayName}</Heading>
        <div className="flex-row specialty-input">
          <Heading color="white" level={4}>Specialty in </Heading>
          <Input
            type="text"
            onBlur={onSpecialtyBlur}
            onChange={e => onChange(e)}
            placeholder="Enter city or specify Nomad"
            value={specialty}
          />
        </div>
      </div>
    </div>
  )
}

ProfileBanner.propTypes = {
  bannerImage: PropTypes.string,
}

export default ProfileBanner
