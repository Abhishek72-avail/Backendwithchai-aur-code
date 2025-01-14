require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')

})

  app.get('/apple', (req, res) => {
    res.send('welcome to apple page')

})

    app.get('/main', (req, res) => {
        res.send('wlecome to main page')
 })

 app.get('/login', (req, res) => {
  res.send('wlecome to login  page')
})


    app.get('/youtube', (req,res) => {
        res.send('<h2> welcome to youtube page </h2>')
    })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})