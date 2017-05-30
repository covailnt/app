import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  reportContainer: {
    width: '100%'
  }
})

export default (handler)=>{
  let cs = stylesheet[handler];
  return css(cs)
}