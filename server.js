import express from 'express'
import { json, urlencoded } from 'body-parser'
// import config from './config'
import { connect } from './utils/db'
// import { User } from './models/user.model'
import userRouter from './routers/user.router'


// BASE SETUP
// =============================================================================

const app = express()       // define our app using express

app.use(json())
app.use(urlencoded({ extended: true }))

// routes
app.use('/api/users', userRouter)

// ROUTES FOR OUR API
// =============================================================================
// const router = express.Router()

// middleware to use for all requests
// router.use((req, res, next) => {
//   // do logging
//   console.log('Test middleware.')
//   next() // make sure we go to the next routes and don't stop here
// })

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', (req, res) => {
//     res.json({ message: 'hooray! welcome to our api!' })
// })

// more routes for our API will happen here
// router.route('/users')
//   .post((req, res) => {
//     const user = new User()

//     user.name = req.body.name
//     user.age = req.body.age

//     user.save((err) => {
//       if (!err) {
//         return res.json({ message: 'User created!' })
//       }

//       return res.send(err)
//     })
//   })

//   .get((req, res) => {
//     User.find((err, users) => {
//       if (!err) {
//         return res.json(users)
//       }

//       return res.send(err)
//     })
//   })

// router.route('/users/:user_id')
//   .get((req, res) => {
//     console.log(req.params);

//     User.findById(req.params.user_id, (err, user) => {
//       if (!err) {
//         return res.json(user)
//       }

//       return res.send(err)
//     })
//   })

//   .put((req, res) => {
//     User.findById(req.params.user_id, (err, user) => {
//       if (err) {
//         return res.send(err)
//       }

//       user.name = req.body.name

//       user.save((err) => {
//         if (err) {
//           res.send(err)
//         }

//         res.json({ message: 'User updated!' })
//       })
//     })
//   })

//   .delete((req, res) => {
//     User.deleteOne({
//       _id: req.params.user_id
//     }, (err, user) => {
//       if (err) {
//         res.send(err)
//       }

//       res.json({ message: `Successfully deleted user.`})
//     })
//   })

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router)

// START THE SERVER
// =============================================================================
export const start = async () => {
  try {
    await connect()
    app.listen(process.env.PORT, () => {
      console.log(`REST API on http://localhost:${process.env.PORT}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
