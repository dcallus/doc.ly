const baseURL = "http://localhost:5000/api/coffees/"
const token = 'AIzaSyCo5P0oK1yXi9wZs7zyQTV6puo5dswHmUY'
const route = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json/keyword=doctor';

export const getCoffees = () =>  {
    return fetch(baseURL)
        .then(res => res.json())
};