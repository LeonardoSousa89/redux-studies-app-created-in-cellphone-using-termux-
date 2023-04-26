import { createStore } from 'redux'
import reducer from '../reducers'

function storeConfig(){
  return createStore(reducer)
}

export { storeConfig }