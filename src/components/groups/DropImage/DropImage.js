import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'refire/firebase'
import Dropzone from 'react-dropzone'
import { Flexbox, Heading, Icon } from 'components/elements'
import defaultBanner from 'images/profile/defaultBanner.jpg'
import { StyleSheet, css } from 'aphrodite'
import classes from './DropImage.scss'

const DropImage = ({ imageURL, height, label, name, setImage, style, uid, width }) => {
  const styles = StyleSheet.create({
    background: {
      backgroundImage: `url(${imageURL || defaultBanner})`,
      height,
      width,
    },
  })

  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('file dropped successfully', acceptedFiles)

    const storageRef = firebase.storage().ref()
    const file = acceptedFiles[0]
    const path = storageRef.child(`images/${uid}/${name}`)

    path.put(file)
      .then((snapshot) => {
        const url = snapshot.metadata.downloadURLs[0]

        setImage({ name, url })

        firebase.database().ref(`users/${uid}`).update({ [name]: url })
      })
      .catch(err => console.log('error: ', err))
  }

  return (
    <Flexbox align="center" direction="column" justify="center">
      <Dropzone
        className={`${css(styles.background)} ${classes.backgroundImg}`}
        multiple={false}
        onDrop={onDrop.bind(this)}
        style={style}
      >
        <Flexbox align="center" direction="column">
          <Heading level={3}>{label}</Heading>
          <Icon color="black" name="picture-o" />
        </Flexbox>
      </Dropzone>
    </Flexbox>
  )
}

DropImage.propTypes = {
  height: PropTypes.string,
  imageURL: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default DropImage
