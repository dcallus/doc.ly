const baseURL = "http://localhost:5000/api/coffees/"

export const getCoffees = () =>  {
    return fetch(baseURL)
        .then(res => res.json())
};