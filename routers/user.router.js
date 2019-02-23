import { Router } from 'express'
import {
  getUser,
  getUsers,
  addNewUser,
  updateUser,
  deleteUser
} from '../controllers/user.controller'

const router = Router()

router
  .route('/')
  .get(getUsers)

router
  .route('/new')
  .post(addNewUser)

router
  .route('/:user_id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser)

export default router