import express from 'express'
import userRouter from './src/routes/user.routes.js'
import { dbConfig } from './src/config/db.config.js'

dbConfig()

const api = express()
const PORT = 3000

api.use(express.json())

api.get('/', (req, res) => {
  res.json({ message: 'API running' })
})

api.use('/api', userRouter)

api.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
