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


router.get('/', (req, res) => {
    res.send('This is the result STUB')
})

// TODO: PROTECT THE ROUTES SO THAT USER INFO CAN GET PASSED TO THE BACKEND
// testing the API request call for darksky
router.post('/weather', (req, res) =>{
    // TODO: convert location to geocode
	request('https://api.darksky.net/forecast/5bfb31dba2eeeb679c6c5d5485e31c0f/47.6062,-122.3321', function(error, response, body) {
        let results = JSON.parse(body)
        res.send(results)
	})
})

// write API call for YELP API call
router.post('/restaurant', (req, res) => {
    client.search({
        term: 'food', //not sure what we want this to be
        location: req.user.location,
        limit: 10,
        open_now: true
    })
    .then((data) => {
        let results = JSON.parse(data.body)
        let businesses = results.businesses //JSON.parse(data.body.businesses)
        res.send(businesses)
    })
    .catch((error) => {
        console.log('ERROR!', error);
    })
})


/// write spotify route
router.get('/music', (req, res) => {
    spotify.search({ type: 'track', query: 'All the Small Things' })
    .then(response => {
        console.log(response);
        res.send(response);
    })
    .catch(err => {
        console.log(err);
    });
})

// Adding an API call for giphy by weather
router.post('/giphy/:currently', (req, res) =>{
    console.log(req.params.currently);
    // TODO: convert location to geocode
	request('http://api.giphy.com/v1/gifs/search?q=' + req.params.currently + '&api_key=dcrysk5UJk2aYk5WsyrZAhk4H5R6Z6uQ', function(error, response, body) {
        res.send(body)
        
	})
})

module.exports = router
