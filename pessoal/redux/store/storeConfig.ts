import { 
  combineReducers,
  createStore
} from 'redux'
import { adminReducer } from '../reducers/adminReducer'

const reducer=combineReducers({
  
  adminReducer
})

function storeConfig(){
  return createStore(reducer)
}

export { storeConfig }