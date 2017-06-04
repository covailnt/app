import dev from './dev'
import dist from './dist'
let config

if (false && process.env.NODE_ENV == 'production') {
  config = dist

} else {
  config = dev
}
export default config
