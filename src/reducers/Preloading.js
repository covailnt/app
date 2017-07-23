import { IS_PRELOADING_STORE } from 'actions/types'

const preloadingReducer = (state = true, action) => {
  switch (action.type) {
    case IS_PRELOADING_STORE:
      return action.preloading

    default:
      return state
  }
}

export default preloadingReducer
