require('dotenv').config();
const request = require('request');
const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/', (req, res)=> {
    res.send('This is the result STUB')
})

// testing the API request call for darksky
router.get('/weather', (req, res)=>{
	request('https://api.darksky.net/forecast/2931a90b9260455bec5edfa409bf0bc0/47.6062,-122.3321', function(error, response, body) {
		console.log("body:", body)
		res.send(body)
	})
})

// write API call for YELP API call


module.exports = router