const express = require('express');
const app = express();
const student = require('./api/routes/student')
const faculty = require('./api/routes/faculty')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gojaw25356:ByrZJ9MIECIkvyAM@cluster0.2jtdl.mongodb.net/')

mongoose.connection.on('connected', () => {
    console.log("Connected to DB")
})
mongoose.connection.on('error', (err) => {
    console.log("Connection Faild")
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/student', student)
app.use('/faculty', faculty)


app.use((req, res, next) => {
    res.status(404).json({
        msg: "Not Found"
    })
})

module.exports = app;
