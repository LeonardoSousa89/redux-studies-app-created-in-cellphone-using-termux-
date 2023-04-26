import { incrementar, decrementar } from '../actions'

import express from "express"
const server=express.Router()

var store

function storeRoot(storeConfig){
  store=storeConfig
  return store
}

server.route('/incrementar').get(async(req, res)=>{
  
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
})

server.route('/decrementar').get(async(req, res)=>{
  
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
})

export { storeRoot }
export default server