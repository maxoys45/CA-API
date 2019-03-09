import express from 'express'
import { json, urlencoded } from 'body-parser'
import session from 'express-session'
import passport from 'passport'
import cors from 'cors'

import config from './config'
import { connect } from './utils/db'

import userRouter from './routers/user.router'
import authRouter from './routers/auth.router'

// BASE SETUP
// =============================================================================

const app = express()       // define our app using express

// passport config
require('./config/passport')(passport);

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
)

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

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
