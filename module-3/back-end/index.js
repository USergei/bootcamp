const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {Document} = require('./src/models/document')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'))
app.use(express.urlencoded({extended:true}))

app.post('/writeDocumentData', async (req, res) => {
  try {
    const result = await Document.create(req.body)
    res.status(200).send(result)
  }
  catch(err) {
    res.status(500).send(err)
  }
})
//TODO create select all documents
//TODO create select document by ID
//TODO find document by title
//TODO create data object from req.body
app.put('/updateDocumentData/:id', async (req, res) => {
  try {
    const result = await Document.update(req.params.id, req.body)
    res.status(200).json(result)
    // if (result) {
    //   res.status(200).json({updated: result})
    // } else {
    //   res.status(404).json({message: "Record not found"})
    // }
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})