import l from '~/utils'
import { FIELDS } from '~/utils/constants'
import { omit, values } from 'lodash'

const getUserData = (firebase, userAuthData) => {
  l('in getting user data')
  const user = {
    displayName: userAuthData.name,
    email: userAuthData.email,
    photoURL: userAuthData.picture,
    uid: userAuthData.user_id,
  }

  const properties = values(FIELDS)
  const ref = firebase.database().ref(`users/${user.uid}`)

  l('have firebase ref getting snapshot')

  return ref.once('value').then(snapshot => {
    // If snapshot.val() exists, user has signed in before
    l('in snapshot function')
    const vals = {}

    if (snapshot.val()) {
      l('snapshot exists')

      properties.forEach(property => {
        if (snapshot.val()[property]) {
          vals[property] = snapshot.val()[property]
        }
      })

      return vals
    }

    ref.set(omit(user, 'uid'))

    return vals
  })
}

export default getUserData
