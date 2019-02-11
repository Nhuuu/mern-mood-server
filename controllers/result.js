require('dotenv').config();
const request = require('request');
const express = require('express');
var geocoder = require('simple-geocoder');
const router = express.Router();
const db = require('../models');
const yelp = require('yelp-fusion')

const client = yelp.client(process.env.yelpKey);

router.get('/', (req, res) => {
    res.send('This is the result STUB')
})

// TODO: PROTECT THE ROUTES SO THAT USER INFO CAN GET PASSED TO THE BACKEND
// testing the API request call for darksky
router.post('/weather', (req, res) =>{
    geocoder.geocode(req.user.location, function(success, locations){
		console.log(locations);
		if(success){
			var lng = locations.x;
			var lat = locations.y;
			console.log("Location: ", locations.x, locations.y);
			var urlToCall = process.env.DARK_SKY_BASE_URL + lat.toString() + ',' + lng.toString();
			console.log('url IS', urlToCall)
			request(urlToCall, function(error, response, body){
				if(error){
					console.log('Error:', success, location);
					res.render('error');
				} else {
					var results = JSON.parse(body);
					res.send(results);
				}
			});
		}
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

// Adding an API call for giphy by weather
router.post('/giphy/:currently', (req, res) =>{
    console.log(req.params.currently);
    // TODO: convert location to geocode
	request('http://api.giphy.com/v1/gifs/search?q=' + req.params.currently + '&api_key=dcrysk5UJk2aYk5WsyrZAhk4H5R6Z6uQ', function(error, response, body) {
        res.send(body)
        
	})
})

module.exports = router
