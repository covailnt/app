function currentUser(state = [], action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return Object.assign({}, action.value)
    default:
      return state
  }
}


export default currentUser;