import { applyMiddleware, combineReducers, createStore } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import preloadingReducer from '~/store/reducers/Preloading'
import rootSaga from '~/store/sagas'
import userReducer from '~/store/reducers/User'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'

const sagaMiddleware = createSagaMiddleware()

export function configureStore(initialState) {
  const rootReducer = combineReducers({
    preloadingStore: preloadingReducer,
    user: userReducer,
  })

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export function connectRedux(BaseComponent) {
  return withRedux(configureStore)(withReduxSaga(BaseComponent))
}
