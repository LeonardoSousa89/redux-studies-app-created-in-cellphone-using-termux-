/* 
video aula: https://m.youtube.com/watch?v=Bg0xlUYAp0c

código: https://codepen.io/vvinhas/pen/ZegYKK?editors=1111
*/

const port=5500

import express from 'express'
import log     from 'morgan'
import { createStore } from 'redux'

const app=express()

app.use(log('dev'))
app.use(express.json())

// Actions
const incrementar={ type: 'INCREMENTAR' }
const decrementar={ type: 'DECREMENTAR' }

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

  