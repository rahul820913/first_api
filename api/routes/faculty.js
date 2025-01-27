const express = require('express');
const router = express.Router();
const Faculty = require('../model/faculty');

router.get('/', (req, res, next) => {
    Faculty.find()
    .then(result => {
        res.status(200).json({
            FacultyData: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

router.post('/', (req , res, next) => {
    const FacultyData = new Faculty({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    })
    FacultyData.save()
    .then(result => {
        res.status(200).json({
        FacultyData: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

router.get('/:id', (req, res, next) => {
    Faculty.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            FacultyData: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

router.delete('/:id', (req, res, next) => {
    Faculty.remove({ _id: req.params.id })
    .then(result => {
        res.status(200).json({
            msg: "Deleted Successfully",
            Result: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})
module.exports = router;