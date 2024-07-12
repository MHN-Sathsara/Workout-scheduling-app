require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//expressapp
const app = express()

//middlware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()  
})

//routs
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  //listen for req
  app.listen(process.env.PORT, () => {
  console.log('COnnected to db & Listening on port',process.env.PORT)
})
})
.catch((error) => {
  console.log(error)
})



