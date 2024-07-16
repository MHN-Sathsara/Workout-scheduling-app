const Workout = require('../models/workoutModel.js')

//get all workout
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    
    res.status(200).json(workouts)
}   

//get a single
const getWorkouts = async (req, res) => {
    const {id} = req.params   

//create a workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //add doc to db
try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
} catch(error){
    res.status(400).json({error: error.message})
}}

//delete a workout

//update a workout

module.exports = {
    createWorkout
}