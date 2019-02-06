require('dotenv').config();
const request = require('request');
const express = require('express');
const router = express.Router();
const db = require('../models');

// yelp
const yelp = require('yelp-fusion')
const client = yelp.client(process.env.yelpKey);


router.get('/', (req, res)=> {
    res.send('This is the result STUB')
})

// testing the API request call for darksky
router.get('/weather', (req, res)=>{
	request('https://api.darksky.net/forecast/2931a90b9260455bec5edfa409bf0bc0/47.6062,-122.3321', function(error, response, body) {
        let results = JSON.parse(body)
        res.send(results)
        console.log(results)
	})
})

// write API call for YELP API call
router.get('/restaurant', (req, res)=>{
    console.log(req.user)
    client.search({
        term: 'food', //not sure what we want this to be
        location: 'Seattle, WA',
        limit: 10,
        open_now: true
    })
    .then((data)=>{
        let results = JSON.parse(data.body)
        let businesses = results.businesses //JSON.parse(data.body.businesses)
        console.log(businesses)
        res.send(businesses)
    })
    .catch((error)=>{
        console.log('ERROR!', error);
    })
})

module.exports = router