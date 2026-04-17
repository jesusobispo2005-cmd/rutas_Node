import { userService, createUserService, deleteUserService, updateUserService } from '../services/user.service.js'

export async function userController(req, res) {
  const {email}=req.body
  const mensaje = await userService(email);
  res.send(mensaje);
}

export async function createUserController(req, res) {
  const data = req.body
  const nuevoUsuario = await createUserService(data)
  res.send(nuevoUsuario)
}

export async function deleteUserController(req, res) {
  const { email } = req.body
  const resultado = await deleteUserService(email)
  res.send(resultado)
}

export async function updateUserController(req, res) {
  const { email, ...data } = req.body
  const resultado = await updateUserService(email, data)
  res.send(resultado)
}