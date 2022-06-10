// STEP 2 BOILERPLATE
// SETUP ENDPOINT

// Setup empty JS object to act as endpoint for all routes
projectData = {
};


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

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

const server = app.listen(port, ()=>{
    console.log("server running");
    console.log(`running on localhost ${port}`);
});


// STEP 5 BOILERPLATE
// SETUP GET ROUTE

// GET Route
app.get('/', function (req, res) {
    console.log(req); // logs request in terminal
    res.send(projectData);
});


// STEP 6 BOILERPLATE
// SETUP POST ROUTE

// POST Route
app.post('/addEntry', entryData);

function entryData (req, res) {
    console.log('POST Request successful');
    console.log(req.body); // STEP 9
    newEntry = {
        date: req.body.date, // project specific not boilerplate
        temp: req.body.temp, // project specific not boilerplate
        feelings: req.body.feelings // project specific not boilerplate
    }
    res.send(projectData);
}


// TEST CODE

// Lesson 3
// HTTP Requests and Routes

// Sub-lessons 3 and 4
// GET route
/*
const appData = {};

app.get('/all', function (req, res) {
    // res.send({data : 'Hello World'}); // confirms GET request by sending set response 
    console.log(req); // logs request in terminal
    res.send(appData);
    // res.send(projectData);
});

// Sub-lesson 4
// POST route
const data = [];

app.post('/addMovie', function (req, res) {
    req.send('POST received');
    data.push(req.body);
    console.log(req.body);
});

// Sub-lesson 6
// POST route
app.post('/add', function (request, response) {
    let data = request.body;
    console.log(data);
});
*/