require('dotenv').config();
const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res)=>{
    res.send('Profile STUB ROUTE')
})

// PUT route to edit the user's profile
router.put('/edit/:id', (req, res) => {
    // Write the route to edit the user
    db.User.findOneAndUpdate({
        _id: req.params.id
    },
        req.body,
        {
            new: true // this allows to return the updated object
        }
    )
    .then(foundUser => {
        res.send(foundUser);
    })
    .catch(error => {
        console.log('ERROR UPDATING USER INFO', error);
        res.status(500).send({ message: 'Server Error' });
    })
})


module.exports = router;