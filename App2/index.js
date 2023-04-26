/* 
video aula: https://m.youtube.com/watch?v=Bg0xlUYAp0c

código: https://codepen.io/vvinhas/pen/ZegYKK?editors=1111
*/

const port=5500

import express from 'express'
import log     from 'morgan'


import { createStore } from 'redux'
import { incrementar, decrementar } from './actions'
import reducer from './reducers'

const app=express()

app.use(log('dev'))
app.use(express.json())

// Store
const store=createStore(reducer)

app.get('/incrementar', async(req, res)=>{
  
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

app.get('/decrementar', async(req, res)=>{
  
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

app.listen(port)


  