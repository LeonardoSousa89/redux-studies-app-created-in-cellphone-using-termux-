const port=5500

import express from 'express'
import log     from 'morgan'

import { storeConfig } from './store'
import server, { storeRoot } from './controllers'

const app=express()

app.use(log('dev'))
app.use(express.json())
app.use('/', server)

// Store
const store=storeConfig()
storeRoot(store)

app.listen(port)


  