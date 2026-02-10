const express = require('express')
const app = express()
const port = 3800

app.get('/', (req, res) => {
 res.send('This is home  page!')
});

app.get('/about', (req, res) => {
  res.send('This is about page!')
});

app.listen(port)
 