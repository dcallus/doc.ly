import React from 'react';

const Modal = ({showModal, currentDoctor}) => {
    return ( 
    <div id="myModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <span class="close" onClick={() => showModal(false)}>&times;</span>
        <h2>Book an Appointment</h2>
      </div>
      <div class="modal-body">
        <p><h3>{currentDoctor}</h3></p>
        <p><label>Date/Time of Appointment: <input type="datetime-local"></input></label></p>
        <p><label>First Name: <input type="text"></input></label></p>
        <p><label>Last Name: <input type="text"></input></label></p>
      </div>
      <div class="modal-footer">
      <button className="button" onClick={showModal}>BOOK NOW</button>
      </div>
    </div>
    
    </div> 
    );
}
 
export default Modal;