import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { User } from '../models/user.model'

export const userSignup = (req, res, next) => {
  console.log(req.body.email)
  User.find({ email: req.body.email })
    .exec()
    .then(user => {
      console.log(user.length)
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Mail exists"
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            })
          } else {
            const user = new User({
              name: req.body.name,
              email: req.body.email,
              password: hash
            })

            user
              .save()
              .then(result => {
                console.log(result)

                res.status(201).json({
                  message: `User created: ${user.name}`
                })
              })
              .catch(err => {
                console.log(err)

                res.status(500).json({
                  error: err
                })
              })
          }
        })
      }
    })
}

export const userLogin = (req, res, next) => {
  User.findOne({
    email: req.body.email
  })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.status(401).json({
          message: 'Auth failed'
        })
      }

      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          console.log(err)

          return res.status(401).json({
            message: 'Auth failed'
          })
        }

        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              user_id: user._id
            },
            'secretbeavers',
            {
              expiresIn: '1h'
            }
          )
          return res.status(200).json({
            message: 'Auth successful',
            token
          })
        }

        res.status(401).json({
          message: 'Auth failed'
        })
      })
    })
    .catch(err => {
      console.log(err)

      res.status(500).json({
        error: err
      })
    })
}

export const deleteUser = (req, res, next) => {
  User.remove({
    _id: req.params.user_id
  })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User deleted"
      })
    })
    .catch(err => {
      console.log(err)

      res.status(500).json({
        error: err
      })
    })
}