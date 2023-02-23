// STEP 2 BOILERPLATE
// SETUP ENDPOINT

// Setup empty JS object to act as endpoint for all routes
projectData = {};


// STEP 1 BOILERPLATE
// SETUP NODE, EXPRESS, DEPENDENCIES AND SERVER

// Require Express to run server and routes
const express = require('express');

// Require Body-Parser and CORS
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

// Middleware
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = process.env.PORT || 3000;

const server = app.listen(port, ()=>{
    console.log("server running");
    console.log(`running on localhost ${port}`);
});


// STEP 5 BOILERPLATE
// SETUP GET ROUTE

// GET Route
app.get('/all', function (req, res) { // STEP 10 CHANGE '/' TO '/all'
    console.log(req);
    res.send(projectData);
});


// STEP 6 BOILERPLATE
// SETUP POST ROUTE

// POST Route
app.post('/addEntry', entryData);

function entryData (req, res) {
    console.log('POST Request successful');
    console.log(req.body); // STEP 9
    projectData = {
        date: req.body.date, // project specific not boilerplate
        temp: req.body.temp, // project specific not boilerplate
        content: req.body.content // project specific not boilerplate
    }
    res.send(projectData);
    console.log(projectData);
}
