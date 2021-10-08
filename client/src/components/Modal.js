import React, {useState, useEffect} from 'react';
import BookingService from "../Services";

const Modal = ({showModal, currentDoctor}) => {
  const [bookings, setBookings] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkedIn, setCheckedIn] = useState(false);

  const handleFirstNameChange = (ev) => setName(ev.target.value);
  const handleLastNameChange = (ev) => setEmail(ev.target.value);
  const handleDateChange = (ev) => setCheckedIn(ev.target.value);
useEffect(() => {
  BookingService.getBookings()
    .then(bookings => setBookings(bookings));
    console.log('bookings:', bookings);
}, [handleSubmit]);

const addBooking = newBooking => {
  BookingService.addBooking(newBooking)
    .then(savedBooking => setBookings([ ...bookings, savedBooking ]));
};

const handleSubmit = ev => {
  ev.preventDefault();
  addBooking({
    name: name,
    email: email,
    checked_in: checkedIn
  });
  setName("");
  setEmail("");
  setCheckedIn(false);
}

    return (       
    <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" onClick={() => showModal(false)}>&times;</span>
        
        <h2>Book an Appointment</h2>
      </div>
      <form onSubmit={handleSubmit} id="booking-form">
      <div class="modal-body">
        <p><h3>{currentDoctor.name}</h3></p>
        <p><label>Date/Time of Appointment: 
          <input type="datetime-local"
          id="name"
          name="name" 
          value={name}
          required
          onChange={handleDateChange}></input></label></p>
        <p><label>First Name: 
          <input type="text"
          id="email" 
          name="email" 
          value={email}
          required
          onChange={handleFirstNameChange}></input></label></p>
        <p><label>Last Name: 
          <input type="text"
          id="checked_in" 
          name="checked_in" 
          value={checkedIn} 
          required
          onChange={handleLastNameChange}></input></label></p>
      </div>
      <div class="modal-footer">
      <button type="submit" className="button" onClick={() => showModal(false)}>BOOK NOW</button>
      </div>
      </form>
    </div>
    
    </div> 
    );
}
 
export default Modal;