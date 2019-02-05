require('dotenv').config();
const request = require('request');
const express = require('express');
const router = express.Router();

// yelp
const yelp = require('yelp-fusion')
const client = yelp.client(process.env.yelpKey);


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
router.get('/restaurant', (req, res)=>{
    client.search({
        term: 'food', //not sure what we want this to be
        // latitude: // we could just use a "location:" depends how specific we want to get.
        // longitude:
        location: 'seattle, wa',
        limit: 10,
        open_now: true
    })
    .then((data)=>{
        var results = JSON.parse(data.body)
        var businesses = results.businesses //JSON.parse(data.body.businesses)
        console.log(businesses)
        res.send(businesses)
    })
    .catch((error)=>{
        console.log('ERROR!', error);
    })
})

module.exports = router