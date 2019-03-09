import passport from 'passport'
import bcrypt from 'bcryptjs'
import { User } from '../models/user.model'


// Login
export const userLogin = (req, res, next) => {
  console.log('req.body', req.body)

  // res.send({ message: req.body });

  // although body is still empty, passport is trying to do it's thing, but redirects are on the localhost:5000 url, not my app. WIP
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.log(err);

      return next(err)
    }

    res.send({ msg: user })
  })(req, res, next)
  //  {
  //   successRedirect: '/dashboard',
  //   failureRedirect: '/err',
  //   // failureFlash: true
  // })(req, res, next)
}

// Register
export const userRegister = (req, res) => {
  const { name, email, password, password2 } = req.body
  let errors = []

  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' })
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' })
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' })
  }

  if (errors.length > 0) {
    errors.forEach((err) => {
      console.log(err);
    })

    res.end('errors, check console')
    /*
    res.render('register', {
      errors,
      email,
      password,
      password2
    })
    */
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' })
        // res.render('register', {
        //   errors,
        //   name,
        //   email,
        //   password,
        //   password2
        // })
        console.log("email already exists")
      } else {
        const newUser = new User({
          name,
          email,
          password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            newUser
              .save()
              .then(user => {
                // req.flash(
                //   'success_msg',
                //   'You are now registered and can log in'
                // );
                // res.redirect('/users/login')

                console.log("you are now registered, congrats")
              })
              .catch(err => console.log(err))
          })
        })
      }
    })
  }
}