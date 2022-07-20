const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const {Document} = require('./src/models/document')

app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'))
app.use(express.urlencoded({extended:true}))

app.post('/writeDocumentData', async (req, res) => {
  try {
    document = {
      title: req.body.title,
      content: req.body.content,
      author_id: req.body.author_id,
      project_id: req.body.project_id,
      status_id: req.body.status_id,
    }
    const result = await Document.create(document)
    res.status(200).send(result)
  }
  catch(err) {
    res.status(500).send(err)
  }
})
//TODO create select all documents
//TODO create select document by ID
//TODO find document by title

app.put('/updateDocumentData/:id', async (req, res) => {
  try {
    document = {
      id: req.params.id,
      title: req.body.title,
      content: req.body.content,
      project_id: req.body.project_id,
      status_id: req.body.status_id,
      updated_at: new Date
    }
    
    const result = await Document.update(document)
    
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