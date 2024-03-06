const dotenv = require('dotenv')
const express = require('express')
dotenv.config()

const app = express()
app.use(express.json())

if (!process.env.FILLOUT_API_KEY) {
  console.error('No Fillout API key provided')
  process.exit(1)
}

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/:formId/filteredResponses', async (req, res) => {
  const allResponses = await fetch(
    `https://api.fillout.com/v1/api/forms/${req.params.formId}/submissions`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.FILLOUT_API_KEY}`
      },
    }
  )
  const data = await allResponses.json()

  // TODO: Apply filters to fetched responses

  res.json(data).send()
})

app.get('/', (req, res) => {
  res.json({ message: 'Fillout assignment (Conner Gillette)' }).send()
})