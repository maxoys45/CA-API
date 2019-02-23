import { User } from '../models/user.model'

export const getUser = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (!err) {
      return res.status(200).json(user)
    }

    return res.send(err)
  })
}

export const getUsers = (req, res) => {
  User.find((err, users) => {
    if (!err) {
      return res.json(users)
    }

    return res.send(err)
  })
}

export const addNewUser = (req, res) => {
  const user = new User()

  user.name = req.body.name
  user.balance = req.body.balance
  // user.age = req.body.age

  user.save((err) => {
    if (!err) {
      return res.json({ message: 'User created!' })
    }

    return res.send(err)
  })
}

export const updateUser = (req, res) => {
  User.findById(req.params.user_id, (err, user) => {
    if (err) {
      return res.send(err)
    }

    user.name = req.body.name
    user.balance = req.body.balance
    // user.age = req.body.age

    user.save((err) => {
      if (err) {
        res.send(err)
      }

      res.json({ message: 'User updated!' })
    })
  })
}

export const deleteUser = (req, res) => {
  User.deleteOne({
    _id: req.params.user_id
  }, (err, user) => {
    if (err) {
      res.send(err)
    }

    res.json({ message: `Successfully deleted user.`})
  })
}