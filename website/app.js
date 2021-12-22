/* Global Variables */
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '83fe249da30258ba3370fbbc31584eff&units=imperial';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Async GET
const retrieveData = async (baseUrl, zip, apiKey) =>{ 
  const request = await fetch(url);
  try {
  // Transform into JSON
  const allData = await request.json()
  }
  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

// GET request
const getData = async ( url = '')=>{
  const res = await fetch (url);
  try{
    const data = await res.json();
    console.log(data);
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