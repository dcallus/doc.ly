const baseURL = "http://localhost:5000/api/doctors/"

export const getDoctors = () =>  {
    return fetch(baseURL)
        .then(res => res.json())
};
