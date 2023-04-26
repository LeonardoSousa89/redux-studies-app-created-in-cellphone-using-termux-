// Reducer (Contador)
const reducer=(state={ contador: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENTAR':
      return { contador: state.contador + 1 }
    case 'DECREMENTAR':
      return { contador: state.contador - 1 }
    default:
      return state
  }
}

export default reducer