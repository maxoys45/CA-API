import { Router } from 'express'
import {
  userLogin,
  userSignup,
  deleteUser } from '../controllers/auth.controller'
import checkAuth from '../middleware/check-auth'

const router = Router()

router
  .route('/signup')
  .post(userSignup)

router
  .route('/login')
  .post(userLogin)

router
  .route('/:user_id')
  .delete(checkAuth, deleteUser)

export default router