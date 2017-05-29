let sessionState = [];
try{
  sessionState = JSON.parse(sessionStorage.getItem('CURRENT_GOAL'))
}catch(error){

}
function currentGoal(state = sessionState, action) {
  switch (action.type) {
    case 'SET_CURRENT_GOAL':
      state =  {...action.value}
      setTimeout(()=>{
        try{
          sessionStorage.setItem('CURRENT_GOAL', JSON.stringify(state))
        }catch(error){

        }
      }, 0)
      return state;
    default:
      return state
  }
}

export default currentGoal;