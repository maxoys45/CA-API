import { Router } from 'express'
import {
  userLogin,
  userRegister
} from '../controllers/auth.controller'

const router = Router()

// replicate this
// router
//   .route('/')
//   .get(controllers.getOne)
//   .post(controllers.createOne)

router
  .route('/login')
  .post(userLogin)

router
  .route('/register')
  .post(userRegister)

export default router