const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {Document} = require('./src/models/document')
const {Project} = require('./src/models/project')

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

app.use(bodyParser.json())
app.use(express.static(__dirname + '/dist'))
app.use(express.urlencoded({extended:true}))

app.post('/createDocument', async (req, res) => {
  try {
    document = {
      title: req.body.title,
      content: req.body.content,
      author_id: req.body.author_id,
      project_id: req.body.project_id,
      status_id: req.body.status_id,
    }
    const result = await Document.create(document)
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.get('/selectAllDocuments', async (req, res) => {
  try {
    const result = await Document.getAll()
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.get('/selectAllDocuments/:projectId', async (req, res) => {
  try {
    const result = await Document.selectAllDocumentsByProject(req.params.projectId)
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.get('/selectDocument/:id', async (req, res) => {
  try {
    const result = await Document.findById(req.params.id)
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.get('/searchDocument/:searchstring', async (req, res) => {
  try {
    const result = await Document.selectByTitle(req.params.searchstring)
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.put('/updateDocument/:id', async (req, res) => {
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
      res.status(200).json(result)
    } else {
      res.status(404).json({message: "Record not found"})
    }
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.post('/createProject', async (req, res) => {
  try {
    const projectData = {
      title: req.body.title,
      description: req.body.description
    }
    const result = await Project.create(projectData)
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.put('/updateProject/:id', async (req, res) => {
  try {
    const projectData = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      updated_at: new Date
    }
    
    const result = await Project.update(projectData)
    
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).json({message: "Record not found"})
    }
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.delete('/deleteProject/:id', async (req, res) => {
  try {
    const id = req.params.id
    const result = await Project.delete(id)
    
    if (result) {
      res.status(200).json(result)
    } else {
      res.status(404).json({message: "Record not found"})
    }
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.get('/selectAllProjects', async (req, res) => {
  try {
    const result = await Project.getAll()
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})

app.get('/selectProject/:id', async (req, res) => {
  try {
    const result = await Project.findById(req.params.id)
    res.status(200).json(result)
  }
  catch(err) {
    res.status(500).json({message: "Internal server error", error: err})
  }
})


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})