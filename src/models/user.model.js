import { dbConfig } from '../config/db.config.js'

export async function userModel() {
  const connection = await dbConfig()

  const userSchema = new connection.Schema({
    nombre: String,
    apellido: String,
    Email: String,
    date: Date
  })

  return connection.models.users||connection.model('users', userSchema, 'users')
}