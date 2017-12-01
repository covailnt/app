import { IS_PRELOADING_STORE } from '~/store/actions/types'

const isPreloadingStore = preloading => ({
  type: IS_PRELOADING_STORE,
  preloading,
})

export default isPreloadingStore
