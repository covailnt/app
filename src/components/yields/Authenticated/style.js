import {StyleSheet, css} from 'aphrodite'
const stylesheet = StyleSheet.create({
  container:{
    padding: '1em'
  }
})

export default (handler)=>{
  let cs = stylesheet[handler];

  return css(cs)
}