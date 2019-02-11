# Summary
 A full-stack MERN app. Dashboard that alters the background with the current weather of the user's location and provides randomized entertainment output. Original concept consisted of 3 randomized questions to analyze the user's mood and provide a results page with conditional entertainment output based on the analysis. Due to time constraints, 

# Technologies Used
* Mongodb
* Express
* React
* Node

## React Components
* Auth components: success redirects to profile page
  * Login: Directs to QuestionForm
  * Signup
* Layout components
  * Nav
  * Footer
* Home: Landing page with app description.
* QuestionForm: Authorized route - logged in users only. Displays mood question and form. After answering this  directs to the Results page.
* Profile: Authorized route - logged in users only. Displays user info, ability to edit user info and a bar chart tracking the user's mood throughout the week. 
  * ProfileEdit.js: Edit form for user info.
* Results: Authorized route - logged in users only. Dashboard displaying uplifting content and suggestions to improve/maintain user's daily mood. 
  * Food.js: Displays suggested restaurant information.
  * Restaurant.js:  displays suggested restaurant image.
  * Giphy.js:  Displays entertaining giphy.
  * Movie.js : Displays suggested movie and corresponding rating and description.
  * Output.js: Displays sayings output, normal/vulgar options available
  * Weather.js: Displays weather icon based on current weather description. 
  * WeatherTemp.js: Displays temperature based on user location.
* App.js: Get user info and set all routes.


## Technical Notes

A single page application (SPA) that uses react-router and axios to interact with a very loosely coupled back-end. The back-end can sign up, log in, or verify a user using JSON web tokens (JWTs). Back-end also tracks user's response to mood question and contains database of output sayings that are randomized upon page refresh.


# Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/current/user | If token present, refresh user data
PUT  | /profile/edit/:id | Edit user/profile info
POST | /answer/user/:id | Tracks user's daily question input in the db
POST | /answer/score | Get's all answers for the user to display in profile bar chart
POST | /result/weather | Fetches darksky API for weather
POST | /result/restaurant | Fetches Yelp restaurant information
POST | /result/giphy/:currently | Fetches Giphy 


## Still To Do
* Tie user's mood response to randomized output. 



