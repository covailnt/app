import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  project: {
    cursor: 'pointer',
    margin: '1em',
    width: '20em',
    overflow: 'hidden',
    borderRadius: '5px'
  },
  name:{
    padding: '.5em',
    backgroundColor: '#2c333e',
    fontSize: '1.5em',
    textTransform: 'capitalize'
  },
  description: {
    backgroundColor: '#323a45'
  }
})

export default (handler)=>(
  css(
    stylesheet[handler]
  )
)