import { Box, Flex, Icon } from 'components/elements'
import { bool, func, object, string } from 'prop-types'
import React from 'react'
import Dropzone from 'react-dropzone'
import styled from 'styled-components'

import firebase from '.config'

const StyledDropzone = styled(Dropzone)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: pointer;
  max-width: 100%;
  opacity: 1;
  padding-top: 16px;
  transition: opacity 1s;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
    transition: opacity 1s;
  }
`

const DropImage = ({
  circle,
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
  const styles = Object.assign({}, style, {
    backgroundImage: `url(${imageURL || defaultImage})`,
    height,
    width,
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
    <Flex
      align="center"
      borderRadius={circle ? '50%' : '0'}
      direction="column"
      justify="center"
      style={{ height: '100%' }}
    >
      <StyledDropzone
        color="black"
        multiple={false}
        onDrop={onDrop.bind(this)}
        style={styles}
      >
        <Flex align="center" direction="column">
          <Icon fill="black" name="photo" />
          <Box mt={3}>{label}</Box>
        </Flex>
      </StyledDropzone>
    </Flex>
  )
}

DropImage.defaultProps = {
  circle: false, // true for shape like an avatar
}

DropImage.propTypes = {
  circle: bool,
  defaultImage: string.isRequired,
  height: string,
  imageURL: string,
  label: string.isRequired,
  imageName: string.isRequired,
  setImage: func.isRequired,
  style: object,
  uid: string.isRequired,
  width: string,
}

export default DropImage
