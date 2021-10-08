import React, {useState, useEffect} from 'react';
import BookingService from "../Services";
import '../App.css';

const Modal = ({showModal, currentDoctor}) => {
  const [bookings, setBookings] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateTime, setDateTime] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleFirstNameChange = (ev) => setFirstName(ev.target.value);
  const handleLastNameChange = (ev) => setLastName(ev.target.value);
  const handleDateChange = (ev) => setDateTime(ev.target.value);

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
    firstName: firstName,
    lastName: lastName,
    date_time: dateTime,
    doctor: currentDoctor.name,
    location: currentDoctor.vicinity
  });
  setFirstName("");
  setLastName("");
  setDateTime(false);
}

return ( 
  <div id="myModal" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" onClick={() => showModal(false)}>&times;</span>
      <h2>Book an Appointment</h2>
    </div>
      {!confirmed?
      
      <form onSubmit={handleSubmit}>
    <div class="modal-body">
      <p><h3>{currentDoctor.name}</h3></p>

      <p><label>Date/Time of Appointment: </label>
      <input type="datetime-local"
      id="input" 
      dateTime="dateTime" 
      value={dateTime} 
      required 
      onChange={handleDateChange}></input></p>
      <p><label>First Name: </label>
        <input type="text"
      id="input" 
      firstName="firstName" 
      value={firstName} 
      required 
      onChange={handleFirstNameChange}></input></p>
      <p><label>Last Name: </label>
      <input type="text"
      id="input" 
      lastName="lastName" 
      value={lastName} 
      required 
      onChange={handleLastNameChange}></input></p>
    </div>
    <div class="modal-footer">
    <button className="button" onClick={() => setConfirmed(true)}>BOOK NOW</button>
    </div>
    </form>: 
    <>
    <div class="confirmation">
      <p><h3>Booking Confirmed</h3></p>
      <p>{currentDoctor.name} @ {dateTime}</p>
    </div>
    <div class="modal-footer">
    <button className="button" onClick={() => showModal(false)}>CLOSE</button>
    </div>
    </>
    }
  </div>
  </div> 

  );
}
 
export default Modal;