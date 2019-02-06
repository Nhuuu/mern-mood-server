require('dotenv').config();
const request = require('request');
const express = require('express');
const router = express.Router();
const db = require('../models');
const yelp = require('yelp-fusion')
const Spotify = require('node-spotify-api');


// clients
const client = yelp.client(process.env.yelpKey);
const spotify = new Spotify({
    id: process.env.SPOTIFY_API_KEY,
    secret: process.env.SPOTIFY_CLIENT_SECRET
  });


router.get('/', (req, res)=> {
    res.send('This is the result STUB')
})

// TODO: PROTECT THE ROUTES SO THAT USER INFO CAN GET PASSED TO THE BACKEND
// testing the API request call for darksky
router.get('/weather', (req, res)=>{
    // TODO: convert location to geocode
	request('https://api.darksky.net/forecast/2931a90b9260455bec5edfa409bf0bc0/47.6062,-122.3321', function(error, response, body) {
        let results = JSON.parse(body)
        res.send(results)
        console.log(results)
	})
})

// write API call for YELP API call
router.post('/restaurant', (req, res)=>{
    console.log(req.body)
    client.search({
        term: 'food', //not sure what we want this to be
        location: 'Seattle, WA', // protect the route
        limit: 10,
        open_now: true
    })
    .then((data)=>{
        let results = JSON.parse(data.body)
        let businesses = results.businesses //JSON.parse(data.body.businesses)
        res.send(businesses)
    })
    .catch((error)=>{
        console.log('ERROR!', error);
    })
})


/// TODO: write spotify route
router.post('/music', (req, res) => {
    console.log('rou')
})

module.exports = router