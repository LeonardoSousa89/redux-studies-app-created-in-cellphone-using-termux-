import express from 'express'

const server=express.Router()

var store

function storeRoot(storeConfig){
  store=storeConfig
  return store
}

server.route('/signup').post((req, res)=>{
  
  /*const response=store.getState().admin
  
  try{
    store.dispatch(incrementar)
    await res.status(200)
             .json({
               action_dispatch: response
             })
  }catch(e){
    await res.status(500).json(e)
  }*/
})

export default server
export {  storeRoot  }