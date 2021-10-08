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
      <form onSubmit={handleSubmit}>
    <div class="modal-body">
      <p><h3>{currentDoctor.name}</h3></p>

      <p><label>Date/Time of Appointment:</label>
      <input type="datetime-local"></input></p>
      <p><label>First Name: </label>
        <input type="text"
      type="text" 
      id="name" 
      name="name" 
      value={name} 
      required 
      onChange={handleFirstNameChange}></input></p>
      <p><label>Last Name: </label>
      <input type="text"></input></p>
    </div>
    <div class="modal-footer">
    <button className="button" onClick={showModal}>BOOK NOW</button>
    </div>
    </form>
  </div>
  
  </div> 
  );
}
 
export default Modal;