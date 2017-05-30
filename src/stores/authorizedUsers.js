function authorizedUsers(state = [], action) {
  switch (action.type) {
    case 'SET_AUTHORIZED_USERS':
      return action.value.map((user)=> Object.assign({}, user))
    default:
      return state
  }
}

export default authorizedUsers;