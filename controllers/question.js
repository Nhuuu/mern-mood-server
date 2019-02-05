require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('./models');

router.get('/', (req, res)=> {
    res.send('Questions STUB Route')
})

// Route to get questions from questions DB
// The returned object will consist of JSON body with objects Mental, Physical, Emotional and array of questions for each
router.get('/question', (req, res)=>{
    db.Questions.find()
    .then(results => {
        console.log('RESULTS SENT TO FRONT END', results)
        res.send(results)
    })
    .catch(error => {
        console.log('ERROR FETCHING QUESTIONS FROM SERVER', error)
    })
})


module.exports = router;