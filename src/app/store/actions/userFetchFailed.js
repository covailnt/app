import { USER_FETCH_FAILED } from '~/store/actions/types'

const userFetchFailed = message => ({ type: USER_FETCH_FAILED, message })

export default userFetchFailed
