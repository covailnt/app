import { LOG_IN_WITH_PROVIDER } from './types'

export function logInWithProvider(provider) {
  console.log('launching login ', provider)
  return {
    type: LOG_IN_WITH_PROVIDER,
    payload: provider,
  }
}
