import {
  IS_FETCHING_USER,
} from 'actions/types'

const defaultState = {
  fetchingUser: true,
}

const fetchingReducer = (state = defaultState, action) => {
  switch (action.type) {
    case IS_FETCHING_USER:
      return Object.assign({}, state, { fetchingUser: action.payload })

    default:
      return state
  }
}

export default fetchingReducer
