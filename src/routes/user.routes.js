import express from 'express'
import { userController, createUserController, deleteUserController, updateUserController } from '../controllers/user.controller.js'

const router = express.Router();

export default router

router.post('/perfil', userController)
router.post('/crear', createUserController)
router.delete('/eliminar', deleteUserController)
router.put('/actualizar', updateUserController)



