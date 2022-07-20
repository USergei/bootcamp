const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {Document} = require('./src/models/document')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'))
app.use(express.urlencoded({extended:true}))

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next()
  next(new Error('Invalid ID'))
}

app.post('/writeDocumentData', async (req, res) => {
  try {
    const result = await Document.create(req.body)
    res.status(200).send(result)
  }
  catch(err) {
    res.status(500).send(err)
  }
})

app.put('/updateDocumentData/:id', isValidId, async (req, res) => {
  try {
    const result = await Document.update(req.params.id, req.body)
    if (result) {
      res.status(200).json({updated: result})
    } else {
      res.status(404).json({message: "Record not found"})
    }
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})