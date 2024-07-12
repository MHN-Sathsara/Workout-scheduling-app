require('dotenv').config()

const express = require('express')
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

//listen for req
app.listen(process.env.PORT, () => {
    console.log('Listening on port',process.env.PORT)
})

