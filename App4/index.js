const port=5500

import express from 'express'
import log     from 'morgan'

import { storeConfig } from './store'
import { incrementarAction, decrementarAction } from './controllers'

const app=express()

app.use(log('dev'))
app.use(express.json())

// Store
const store=storeConfig()

app.get('/incrementar', (req, res)=>incrementarAction(res, store))
app.get('/decrementar', (req, res)=>decrementarAction(res, store))

app.listen(port)


  