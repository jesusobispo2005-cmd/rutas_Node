import { userModel } from '../models/user.model.js'

export async function userService(email) {
  console.log(`este es el email del servicio: ${email}`)
  const usuario = await userModel()
  return await usuario.findOne({'Email':email});
}

export async function createUserService(data) {
  const usuario = await userModel()
  return await usuario.create(data)
}

export async function deleteUserService(email) {
  const usuario = await userModel()
  const userToDelete = await usuario.findOne({ 'Email': email })
  if (!userToDelete) {
    return { mensaje: 'Usuario no encontrado' }
  }
  const nombre = userToDelete.nombre
  await usuario.deleteOne({ 'Email': email })
  return { mensaje: `Usuario ${nombre} eliminado` }
}

export async function updateUserService(email, data) {
  const usuario = await userModel()
  const userToUpdate = await usuario.findOneAndUpdate(
    { 'Email': email },
    data,
    { new: true }
  )
  if (!userToUpdate) {
    return { mensaje: 'Usuario no encontrado' }
  }
  return userToUpdate
}