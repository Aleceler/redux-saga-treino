function counter(state = 0, action) {
  console.log(action, state)
    switch (action.type) {
      case 'INCREMENT':
          return state + 1 + action.adicional
      case 'DECREMENT':
        return state - 1 - action.adicional
      default:
        return state
    }
  }

  export default counter;