function resources(state = [], action) {
  switch (action.type) {
    case 'SET_RESOURCES':
      return action.value.map((resource)=>( Object.assign({}, resource)))
    default:
      return state
  }
}

export default resources;