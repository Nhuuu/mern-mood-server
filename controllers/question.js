require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');
const request = require('request');

// Route to get questions from questions DB
// The returned object will consist of JSON body with objects Mental, Physical, Emotional and array of questions for each
router.post('/', (req, res)=> {
    db.Question.find()
    .then(results => {
        res.send(results)
    })
    .catch(error => {
        console.log('ERROR FETCHING QUESTIONS FROM SERVER', error)
        res.status(500).send('DATABASE ERROR')
    })
})



module.exports = router;