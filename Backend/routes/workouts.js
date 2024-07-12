const express = require('express')
const router = express.Router()

//GEt all Workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GETT ALL WORKOUTS!'})
})

//Get Single workout
router.get('/:id',(req, res) =>{
    res.json({mssg: 'GET A SINGLE WORKOUT!'})
})

//POST a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout!'})
})
//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'workout deleted!'})
})
//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'workout update!'})
})

module.exports = router 