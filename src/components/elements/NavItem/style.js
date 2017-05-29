import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  item: {
      display: 'inline-block',
      'text-decoration': 'none',
      color: '#fff',
      padding: '.13em 0em',
      margin: '1em',
      'border-bottom': '1px solid transparent',
      ':hover': {
        'border-bottom': '1px solid #afd0f7'
      }
  },
  active: {
    'border-bottom': '1px solid #afd0f7'
  }
})

export default (handler, active)=>{
  return css(
    stylesheet[handler],
    active && stylesheet.active
  )
}