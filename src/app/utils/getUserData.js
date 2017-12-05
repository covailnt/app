import { userFetchSucceeded } from '~/store/actions'
import l from '~/utils'
import { FIELDS } from '~/utils/constants'
import { omit, values } from 'lodash'

const getUserData = (firebase, userAuthData, store) => {
  l('in getting user data')
  const user = {
    userName: userAuthData.name,
    email: userAuthData.email,
    picture: userAuthData.picture,
    uid: userAuthData.user_id,
  }

  const properties = values(FIELDS)
  const ref = firebase.database().ref(`users/${user.uid}`)

  l('have firebase ref getting snapshot')

  return ref.once('value').then(snapshot => {
    l('in snapshot function')
    const isFirstSignIn = snapshot.val()
    const values = {}

    if (isFirstSignIn) {
      l('snapshot exists')

      properties.forEach(property => {
        if (snapshot.val()[property]) {
          values[property] = snapshot.val()[property]
        }
      })
    } else {
      ref.set(omit(user, 'uid'))
    }

    store.dispatch(userFetchSucceeded(values))

    return values
  })
}

export default getUserData
