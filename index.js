const dotenv = require('dotenv')
const express = require('express')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.json({ message: 'Fillout assignment (Conner Gillette)' }).send()
})