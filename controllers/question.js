require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('./models');

router.get('/', (req, res)=> {
    res.send('Questions STUB Route')
})

// TODO: Route to get questions from questions DB
router.post('/question', (req, res)=>{
    // db.question
        // then mental
            // then physical
                // then compliation of questions
            // catch
        // catch
    // catch
})

module.exports = router;