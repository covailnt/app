import { USER_FETCH_REQUESTED } from '~/store/actions/types'

const userFetchRequested = user => ({ type: USER_FETCH_REQUESTED, user })

export default userFetchRequested
