import axios from 'axios';

async function fetchFunction(term,category,location,sort) {
    const API = 'mVkI8cJKHAw2u_3H9vqxhfB4JhECH--tFRQwzTsnQQLYBCE4fL5T3DOwestN0YkJanJH-NWvQXxmGzbbnqC3dqc-TmxWBrNSgqPHzKUlOfurk00IxzhgNcZ3IlimXHYx';
    let url = `${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=${sort}&limit=10&term=${term}&categories=${category}&locale=en_CA`;
    const Auth = 'Bearer ' + API;
    console.log(url)
    try {
        const fetch = await axios.get(url, { 'headers': { 'Authorization': Auth } })
        const res = await fetch
        return await res
    } catch (err) {
      console.log(err)
    }
  }
  
  export default fetchFunction
  
 

  