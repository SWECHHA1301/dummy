import React from 'react';
import './LocationAlert.css';

function LocationAlert({ onClose }) {
  return (
    <div className="overlay">
      <div className="alert-box">
        <span className="close-icon" onClick={onClose}>&times;</span>

        <div className="icon">📍</div>
        <p className="message">
          To deliver as quickly as possible, we would like your current location
        </p>

        <div className="button-group">
          <button className="select-address">Select Address</button>
          <button className="use-location">Use Current Location</button>
        </div>
      </div>
    </div>
  );
}

export default LocationAlert;


