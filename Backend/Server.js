require('dotenv').config()

const express = require('express')

//expressapp
const app = express()

//middlware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()  
})

//routs
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//listen for req
app.listen(process.env.PORT, () => {
    console.log('Listening on port',process.env.PORT)
})

