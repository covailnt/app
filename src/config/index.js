import dev from './dev'
import dist from './dist'
let config

if (process.env.NODE_ENV == 'production') {
  console.log('production')
  config = dist

} else {
  console.log('development')
  config = dev
}
export default config
