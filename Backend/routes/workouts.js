const express = require('express')
const router = express.Router()
const Workout = require('../models/workoutModel.js')
//GEt all Workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GETT ALL WORKOUTS!'})
})

//Get Single workout
router.get('/:id',(req, res) =>{
    res.json({mssg: 'GET A SINGLE WORKOUT!'})
})

//POST a new workout
router.post('/', async(req, res) => {
    const {title, load, reps} = req.body
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
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