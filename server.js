// Setup empty JS object to act as endpoint for all routes
projectData = {
};

// Require Express to run server and routes
const express = require('express');

// Require Body-Parser and CORS
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;

const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost ${port}`);
};


// TEST CODE
// GET route
const appData = {};

app.get('/all', function (req, res) {
    // res.send({data : 'Hello World'});
    console.log(req);
    res.send(appData);
    // res.send(projectData);
});

// POST route
const data = [];

app.post('/addMovie', function (req, res) {
    data.push(req.body);
    console.log(req.body);
});

app.post('/add', function (request, response) {
    let data = request.body;
    console.log(data);
});