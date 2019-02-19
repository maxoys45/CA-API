import express from 'express'
import { json, urlencoded } from 'body-parser'
import cors from 'cors'

import config from './config'
import { connect } from './utils/db'

import userRouter from './routers/user.router'

// BASE SETUP
// =============================================================================

const app = express()       // define our app using express

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

// routes
app.use('/api/users', userRouter)

// START THE SERVER
// =============================================================================
export const start = async () => {
  try {
    await connect()
    app.listen(process.env.PORT || config.PORT, () => {
      console.log(`REST API listening on port ${process.env.PORT || config.PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}
