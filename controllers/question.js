require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');
const request = require('request');

// Route to get questions from questions DB
router.post('/', (req, res)=> {
    db.Moodquestion.find()
    .then(results => {
        res.send(results)
    })
    .catch(error => {
        console.log('ERROR FETCHING QUESTIONS FROM SERVER', error)
        res.status(500).send('DATABASE ERROR')
    })
})



module.exports = router;