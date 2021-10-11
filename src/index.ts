import { app } from './server'

require('dotenv').config()
const { PORT } = process.env

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
