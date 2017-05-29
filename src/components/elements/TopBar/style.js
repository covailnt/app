import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  ul: {
      display: 'table',
      width: '100%',
      'box-sizing':'border-box',
      '-webkit-padding-start': '0px',
      '-webkit-padding-end': '0px',
      margin: '0px'
  },
  li: {
    'vertical-align':'middle',
    display: 'table-cell'
  }
})

export default (handler)=>(
  css(
    stylesheet[handler]
  )
)