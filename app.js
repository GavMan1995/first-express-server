const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use('/assets', express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/api', (req, res) => {
  res.json({name: 'john doe', happy: true})
})

app.get('/person/:id', (req, res) => {
  res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></htm>')
})

app.listen(port)
