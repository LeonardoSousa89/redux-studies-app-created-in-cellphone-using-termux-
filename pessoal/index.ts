const port=54321

import server, {  storeRoot  } from './controllers/route'
import {  storeConfig  } from './redux/store/storeConfig'

import log from 'morgan'
import express from 'express'

const store=storeConfig()
storeRoot(store)

const app=express()

app.use(log('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/', server)

app.listen(port)