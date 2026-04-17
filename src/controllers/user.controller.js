import { userService } from '../services/user.service.js'

export async function userController(req, res) {
  const {email}=req.body
  const mensaje = await userService(email);
  res.send(mensaje);
}