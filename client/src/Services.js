const baseURL = "http://localhost:5000/api/coffees/"
const token = 'AIzaSyCo5P0oK1yXi9wZs7zyQTV6puo5dswHmUY'
const route = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json/keyword=doctor';

export const getCoffees = () =>  {
    return fetch(baseURL)
        .then(res => res.json())
};

export async function getDoctors (distance, lat, long) {
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=doctor&location=55.828994746594276%2C-4.280908896430538&radius=15&type=health&key=AIzaSyCo5P0oK1yXi9wZs7zyQTV6puo5dswHmUY`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then((responseJson) => {
    console.log(responseJson)
  })
  .catch((error) => {
    console.log(error)
  })}