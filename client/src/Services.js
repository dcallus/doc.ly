const baseURL = "http://localhost:5000/api/doctors/"

const BookingService =  {
    getBookings() {
      return fetch(baseURL)
        .then(res => res.json());
    },
  
    addBooking(booking) {
      return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
    },
}
  
  export default BookingService;