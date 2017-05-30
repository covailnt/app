function users(state = [], action) {
  switch (action.type) {
    case 'SET_USERS':
      return action.value.map((tasks)=> Object.assign({}, tasks))
    default:
      return state
  }
}


export default users;