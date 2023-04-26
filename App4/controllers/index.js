import { incrementar, decrementar } from '../actions'

async function incrementarAction(res, store){
  
  const response=store.getState().contador
  
  try{
    store.dispatch(incrementar)
    await res.status(200)
             .json({
               action_dispatch: response
             })
  }catch(e){
    await res.status(500).json(e)
  }
}

async function decrementarAction(res, store){
  
 const response=store.getState().contador
  
  try{
    store.dispatch(decrementar)
    await res.status(200)
             .json({
               action_dispatch: response
             })
  }catch(e){
    await res.status(500).json(e)
  }
}

export { 
  incrementarAction, 
  decrementarAction
}