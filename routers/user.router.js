import { Router } from 'express'
import {
  getUser,
  getUsers,
  addNewUser,
  updateUser,
  deleteUser
} from '../controllers/user.controller'

const router = Router()

router.get('/:user_id', getUser)
router.get('/', getUsers)
router.post('/new', addNewUser)
router.put('/:user_id', updateUser)
router.delete('/:user_id', deleteUser)

export default router