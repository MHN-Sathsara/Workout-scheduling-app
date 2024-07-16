const express = require('express')
const { 
    createWorkout,
    getWorkout,
    getWorkouts   

} = require('../controllers/workoutController')



const router = express.Router()

//GEt all Workouts
router.get('/', getWorkouts)

//Get Single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'workout deleted!'})
})
//Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'workout update!'})
})

module.exports = router 