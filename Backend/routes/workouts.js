const express = require('express')
const { 
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout   

} = require('../controllers/workoutController')



const router = express.Router()

//GEt all Workouts
router.get('/', getWorkouts)

//Get Single workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//Delete a workout
router.delete('/:id', deleteWorkout)

//Update a workout
router.patch('/:id', updateWorkout)

module.exports = router 