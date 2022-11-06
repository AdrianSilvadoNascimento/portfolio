const express = require('express')
const path = require('path')

const APP_DIST_FOLDER = './portfolio'
const DEFAULT_PAGE = 'index.html'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, APP_DIST_FOLDER, DEFAULT_PAGE))
})

app.use((req, res) => {
  console.error('Resource not found')
})

app.listen(PORT, () => {
  console.log(`[${APP_DIST_FOLDER}] (front-end) iniciado na porta ${PORT}`)
})
