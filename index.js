const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './docs', 'index.html'))
})

app.get('/malalatiana', (req, res) => {
  res.sendFile(path.join(__dirname, './docs', 'malalatiana.html'))
})

app.post('/:comment', (req, res) => {
  res.json(req.params.comment)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})