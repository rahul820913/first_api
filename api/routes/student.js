const express = require('express');
const router = express.Router();
const student = require('../model/student')

router.get('/', (req, res, next) => {
    student.find()
    .then(result => {
        res.status(200).json({
            studentData: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

router.post('/', (req , res, next) => {
    const studentData = new student({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address
    })
    studentData.save()
    .then(result => {
        res.status(200).json({
        studentData: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})

router.get('/:id', (req, res, next) => {
    student.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            studentData: result
        })
    })
    .catch(err => {
        res.status(500).json({
            error: err
        })
    })
})
module.exports = router;