require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');

// POST route to record to the database the answers for each question
router.post('/user/:id', (req, res) => {
    db.User.findOne({
        _id: req.params.id
    })
    .then(foundUser => {
        console.log(req.body)
        db.Answer.create({
            score: req.body.score,
            userId: foundUser._id
        })
        .then(answerRecorded => {
            console.log('answer has been recorded', answerRecorded);
            res.send(answerRecorded);
        })
        .catch(error => {
            console.log('ERROR RECORDING ANSWERS', error)
            res.status(500).send('Database error')
        })
    })
    .catch(error => {
        console.log('ERROR FINDING USER', error);
        res.status(404).send('USER NOT FOUND')
    })
})

router.post('/score/', (req, res) => {
    db.Answer.find({
        userId: req.user.id,
        timestamp : { 
        $lt: new Date(), 
        $gte: new Date(new Date().setDate(new Date().getDate()-1))
        }
    })
    .then(foundAnswers => {
        console.log(foundAnswers)
        res.send(foundAnswers)
    })
    .catch(error => {
        console.log('ERROR RETRIEVING THE USER\'s SCORE', error)
    })
})


module.exports = router;