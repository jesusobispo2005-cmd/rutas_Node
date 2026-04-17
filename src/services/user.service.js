import { userModel } from '../models/user.model.js'

export async function userService(email) {
  console.log(`este es el email del servicio: ${email}`)
  const usuario = await userModel()
  return await usuario.findOne({'Email':email});
}