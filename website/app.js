/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '83fe249da30258ba3370fbbc31584eff';
const testZip = '10001'; // zip code for testing only

// const btn = document.querySelector('#generate');

// STEP 3
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
console.log(newDate);

// Event Listener with callBack
// btn.addEventListener('click' , callBack);

// Async GET
const retrieveData = async (baseUrl, testZip, apiKey)=>{ 
  const res = await fetch(baseUrl + testZip + '&appid=' + apiKey + '&units=imperial');
  console.log('response');
  console.log(res);
  try {
  // Transform into JSON
    const data = await res.json();
    console.log('data');
    console.log(data);
    return data;
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

retrieveData(baseUrl, testZip, apiKey);


// TEST CODE
// GET request
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