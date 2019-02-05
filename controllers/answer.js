require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');

// POST route to write to the database the answers for each question
router.post('/user/:id', (req, res)=>{
    
})

module.exports = router;