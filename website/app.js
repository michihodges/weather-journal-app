/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '83fe249da30258ba3370fbbc31584eff';
const testZip = '10001'; // zip code for testing only

const btn = document.querySelector('#generate');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event Listener with callBack
btn.addEventListener('click' , callBack);

// Async GET
const retrieveData = async (baseUrl, testZip, apiKey) =>{ 
  const res = await fetch(baseUrl + testZip + '&appid=' + apiKey + '&units=imperial');
  console.log(res);
  try {
  // Transform into JSON
    const data = await res.json();
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

// POST request
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/addMovie', {movie:' The Matrix', score: 5});
postData('/add', {answer:42});