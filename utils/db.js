import mongoose from 'mongoose'
import config from '../config'

// import 'dotenv/config'

// export const connect = (url = process.env.DB_URL, opts = {}) => {
//   return mongoose.connect(
//     url,
//     { ...opts, useNewUrlParser: true }
//   )
// }

export const connect = (url = config.DB_URL, opts = {}) => {
  return mongoose.connect(
    url,
    { ...opts, useNewUrlParser: true }
  )
}