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
        <p>{currentDoctor.name}</p>
        <p>Some other text...</p>
      </div>
      <div class="modal-footer">
      <button className="button" onClick={showModal}>BOOK NOW</button>
      </div>
    </div>
    
    </div> 
    );
}
 
export default Modal;