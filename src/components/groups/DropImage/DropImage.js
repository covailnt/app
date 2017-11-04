import { StyleSheet, css } from 'aphrodite'
import { Icon } from 'components/elements'
import PropTypes from 'prop-types'
import React from 'react'
import Dropzone from 'react-dropzone'
import { Flex } from 'rebass'

import classes from './DropImage.scss'
import firebase from '.config'

const DropImage = ({
  defaultImage,
  imageURL,
  height,
  label,
  imageName,
  setImage,
  style,
  uid,
  width,
}) => {
  const styles = StyleSheet.create({
    dropzone: {
      backgroundImage: `url(${imageURL || defaultImage})`,
      height,
      width,
    },
  })

  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('acceptedFiles', acceptedFiles)
    console.log('rejectedFiles', rejectedFiles)

    const storageRef = firebase.storage().ref()
    const file = acceptedFiles[0]
    const path = storageRef.child(`images/${uid}/${imageName}`)

    path
      .put(file)
      .then(snapshot => {
        const url = snapshot.metadata.downloadURLs[0]

        setImage({ name: imageName, url })

        firebase
          .database()
          .ref(`users/${uid}`)
          .update({ [imageName]: url })
      })
      .catch(err => console.log('error: ', err))
  }

  return (
    <Flex align="center" direction="column" justify="center">
      <Dropzone
        className={`${css(styles.dropzone)} ${classes.dropzone}`}
        multiple={false}
        onDrop={onDrop.bind(this)}
        style={style}
      >
        <Flex align="center" direction="column">
          <div>{label}</div>
          <Icon color="black" name="picture-o" />
        </Flex>
      </Dropzone>
    </Flex>
  )
}

DropImage.propTypes = {
  defaultImage: PropTypes.string.isRequired,
  height: PropTypes.string,
  imageURL: PropTypes.string,
  label: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  setImage: PropTypes.func.isRequired,
  style: PropTypes.object,
  uid: PropTypes.string.isRequired,
  width: PropTypes.string,
}

export default DropImage
