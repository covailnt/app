import { USER_FETCH_SUCCEEDED } from '~/store/actions/types'

const userFetchSucceeded = user => ({ type: USER_FETCH_SUCCEEDED, user })

export default userFetchSucceeded
