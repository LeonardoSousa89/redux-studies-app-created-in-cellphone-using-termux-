import { User } from '../interface/user'
import { ADMIN_USER } from '../actions/admin'

const initialState: User={
  nome: '',
  email: '',
  senha: '',
  tipo: ''
}

export const adminReducer=(state=initialState, action) => {
  switch (action.type) {
    case ADMIN_USER:
      return { 
        ...state,
        nome:  action.payload.nome,
        email: action.payload.email,
        senha: action.payload.senha
        }
     default:
      return state
  }
}

