import { Router } from 'express'
import {
  userSignin,
  userSignup,
  deleteUser } from '../controllers/auth.controller'

const router = Router()

router
  .route('/signup')
  .post(userSignup)

router
  .route('/:user_id')
  .delete(deleteUser)

export default router