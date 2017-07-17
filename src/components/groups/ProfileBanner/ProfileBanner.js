import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'refire/firebase'
import Dropzone from 'react-dropzone'
import { Flexbox, Heading, Icon } from 'components/elements'
import defaultBanner from 'images/profile/defaultBanner.jpg'
import classes from './ProfileBanner.scss'

const ProfileBanner = ({ bannerURL, setProfileBanner, uid }) => {
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

  return (
    <Flexbox align="center" direction="column" justify="center">
      <Dropzone
        className={classes.bannerImg}
        multiple={false}
        onDrop={onDrop.bind(this)}
        style={{ backgroundImage: `url(${bannerURL || defaultBanner})` }}
      >
        <Flexbox align="center" direction="column">
          <Heading level={3}>Drop cover photo here</Heading>
          <Icon color="black" name="picture-o" />
        </Flexbox>
      </Dropzone>
    </Flexbox>
  )
}

ProfileBanner.propTypes = {
  bannerImage: PropTypes.string,
}

export default ProfileBanner
