// WELCOME MESSAGE
console.log('Hello world and welcome to my weather journal app');

// STEP 4 BOILERPLATE
// AQUIRE API CREDENTIALS

// API credentials
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=83fe249da30258ba3370fbbc31584eff&units=imperial';
//const testZip = '10001'; // zip code for testing only


// STEP 3
// DATE

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;


// STEP 7 BOILERPLATE
// SETUP SUBMIT BUTTON

// Event Listener with callBack
const btn = document.querySelector('#generate');
btn.addEventListener('click', performAction); // submits and generates everything

function performAction(e) {
  const zipCode = document.querySelector('#zip').value; // zip needs to be in function scope not global scope
  const content = document.querySelector('#feelings').value; // zip needs to be in function scope not global scope
  //retrieveData(baseUrl, testZip, apiKey);
  console.log('Event clicked and successfully retrieved data from API');
  //console.log(`${baseUrl}${testZip}${apiKey}`);
  console.log(`${baseUrl}${zipCode}${apiKey}`);
  retrieveData(baseUrl, zipCode, apiKey)


  // STEP 9 BOILERPLATE
  // CHAIN POST PROMISE
  .then(function(data){
    // Add data to POST request
    postData('/addEntry', {date: newDate, temp: data.main.temp, content})
  })


  // STEP 10 BOILERPLATE
  // UPDATE UI
  .then(
    updateUi()
  )
}


// STEP 8 BOILERPLATE
// SETUP ASYNC GET REQUEST WITH PROMISE AND FETCH API

// Async GET Request
const retrieveData = async (base, zip, key)=>{ // parameters are project specific not boilerplate
  const res = await fetch(base+zip+key); // parameters are project specific not boilerplate
  console.log('Async GET Request response successful');
  console.log(res);
  try {
    // Transform into JSON
    const data = await res.json();
    return data;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}


// STEP 9 BOILERPLATE
// SETUP ASYNC POST REQUEST WITH PROMISE AND FETCH API

// Async POST Request
const postData = async ( url = '', data = {})=>{
  console.log('Async POST Request response successful');
  console.log(data);
    const res = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same origin, omit
    headers: {
        'Content-Type': 'application/json', // ! set data type as json
    },        
    body: JSON.stringify({ // ! body data type must match "Content-Type" header
      date: data.date, // project specific not boilerplate
      temp: data.temp, // project specific not boilerplate
      content: data.content // project specific not boilerplate
    })
  });
    try {
      // Transform into JSON
      const newData = await res.json();
      console.log(newData);
      return newData;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}


// STEP 10 BOILERPLATE
// UPDATE UI

const updateUi = async ()=>{
  const res = await fetch('/all');
  console.log('Update UI Async GET Request response successful');
  console.log(res);
  try {
    // Transform into JSON
    const allData = await res.json();
    console.log(allData)
    // Write updated data to DOM elements
    document.querySelector('#date').innerHTML = allData.date;
    document.querySelector('#temp').innerHTML = Math.round(allData.temp) + ' degrees';
    document.querySelector('#content').innerHTML = allData.content;
    return allData;
  }
  catch(error) {
    console.log('error', error);
    // appropriately handle the error
  }
}


// TEST CODE
// GET request
/*
const getData = async ( url = '')=>{
  const res = await fetch (url);
  try{
    const data = await res.json();
    console.log(data);
    return data;
  }catch(error){
    console.log("error",error);
  }
}

getData('/all');

// Sub-lesson 6
// POST request made to POST route
const postData = async ( url = '', data = {})=>{ // all of this is boilerplate
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same origin, omit
      headers: {
          'Content-Type': 'application/json', // ! set data type as json
      },        
      body: JSON.stringify(data), // ! body data type must match "Content-Type" header
    });
      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error); // appropriately handle the error
      }
  }

// Sub-lesson 4
postData('/addMovie', {movie:' The Matrix', score: 5}); // example of what you can POST

// Sub-lesson 6
postData('/add', {answer:42}); // another example of what you can POST
*/