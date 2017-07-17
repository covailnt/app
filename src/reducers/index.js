import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import refire from 'refire'
import fetchingReducer from './Fetching'
import userReducer from './User'

const rootReducer = combineReducers({
  fetching: fetchingReducer,
  user: userReducer,
})

window.store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(refire)
  )
)

export default window.store
