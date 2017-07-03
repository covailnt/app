import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'refire/firebase'
import Dropzone from 'react-dropzone'
import { Heading, Input } from 'components/elements'
import defaultBanner from 'images/profile/defaultBanner.jpg'
import theme from 'theme'

const ProfileBanner = ({ bannerImage, setProfileBanner, uid }) => {

  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('file dropped successfully', acceptedFiles)

    const storageRef = firebase.storage().ref()
    const file = acceptedFiles[0]
    const path = storageRef.child(`images/${uid}/banner`)

    path.put(file)
      .then(snapshot => {
        const URL = snapshot.metadata.downloadURLs[0]

        console.log('snapshot', URL)

        setProfileBanner(URL)

        firebase.database().ref('users/' + uid).update({ bannerURL: URL })
      })
      .catch(err => console.log('error: ', err))
  }
  return (
    <div className='profile-banner-ctn'>
      <Dropzone
        multiple={false}
        onDrop={onDrop.bind(this)}
      >
        <div
          className='banner-img'
          style={{ backgroundImage: `url(${bannerImage || defaultBanner})` }}
        />
      </Dropzone>

      {/*<Heading level={3} color='white'>Rank <br/>{type}</Heading>
      <Heading level={4} color='white'>{value}</Heading>
      <Heading level={1} color='white'>{value}</Heading>
      <Input type='text' placeholder='Name as it will display on your profile' />*/}
    </div>
  )
}

ProfileBanner.propTypes = {
  bannerImage: PropTypes.string,
}

export default ProfileBanner
