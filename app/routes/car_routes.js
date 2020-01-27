//import express
const express = require('express');
//import router into express
const router = express.Router();
//import car model
const Car = require('../models/car');


const customErrors = require('../../lib/custom_errors')
// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

//Index 
// GET /cars
router.get('/cars',(req,res,next) => {
    Car.find()
    .then(cars => {
        res.status(200).json({cars:cars});
    })
    .catch(next)
})



//CREATE
//POST - /cars
router.post('/cars',(req,res,next) => {
    const newCar = req.body.car
    Car.create(newCar)
    .then(car => {
        res.status(201).json({car:car})
    })
    .catch(next)
})

//SHOW 
// GET - /cars/:id
router.get('/cars/:id',(req,res,next) => {
    const carId = req.params.id;
    Car.findById(carId)
    .then(car =>{
        res.status(200).json({car:car})
    })
    .catch(next)
})



//UPDATE
// PUT -> Large data
//PATCH -> small data
//PATCH - /cars/:id
router.patch('/cars/:id',(req,res,next) => {
    const carId = req.params.id;
    const updatedCar = req.body.car
    Car.findByIdAndUpdate(carId,updatedCar)
    .then( () => {
        res.sendStatus(204)
    } )
    .catch(next)
})

//Destroy
// delete - /cars/:id
router.delete('/cars/:id',(req,res,next) => {
    const carId = req.params.id;
    Car.findByIdAndRemove(carId)
    .then(() => {
        res.sendStatus(204)
    })
    .catch(next)
    //another way to use delete  
    // Car.findById(carId)
    // .then((car) => {
    //     return car.remove()
    // })
    // .then(() => res.sendStatus(204))
    // .catch(next)
})






module.exports = router;