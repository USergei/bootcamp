const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {Document} = require('./src/models/document')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'))
app.use(express.urlencoded({extended:true}))

app.post('/writeProseMirrorData', async (req, res) => {
  try {
    const result = await Document.create(req.body)
    // const result = await query.json()
    res.status(200).send(result)
  }
  catch(err) {
    res.status(500).send(err)
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})