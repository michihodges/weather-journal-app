// Global Variables
// API
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '&appid=83fe249da30258ba3370fbbc31584eff&units=imperial';
//const testZip = '10001'; // zip code for testing only

// STEP 3
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`;
console.log(`Date ${newDate}`);

// STEP 4
// Event Listener with callBack
const btn = document.querySelector('#generate');
btn.addEventListener('click', performAction);

function performAction(e) {
  const zipCode = document.querySelector('#zip').value; // zip needs to be in function scope not global scope
  //retrieveData(baseUrl, testZip, apiKey);
  console.log('Event clicked and successfully retrieved data from API');
  //console.log(`${baseUrl}${testZip}${apiKey}`);
  console.log(`${baseUrl}${zipCode}${apiKey}`);
  retrieveData(baseUrl, zipCode, apiKey);
}

// Async GET Request
const retrieveData = async (base, zip, key)=>{ 
  const res = await fetch(base+zip+key);
  console.log('Async GET Request response successful');
  console.log(res);
  try {
  // Transform into JSON
    const data = await res.json();
    console.log(`Data ${data}`);
    return data;
  }
  catch(error) {
    console.log("error", error);
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