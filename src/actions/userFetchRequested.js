import { USER_FETCH_REQUESTED } from 'actions/types'

const userFetchRequested = user => ({ type: USER_FETCH_REQUESTED, user })

export default userFetchRequested
