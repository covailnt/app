import {StyleSheet, css} from 'aphrodite'

const stylesheet = StyleSheet.create({
 count: {
   display: 'inline-block'
 }
})

export default (handler)=>{
  let cs = stylesheet[handler];
  return css(cs)
}