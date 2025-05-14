import React, { useState } from 'react';
import './AddressForm.css';
import LocationAlert from './LocationAlert';


function AddressForm() {
  const [label, setLabel] = useState('Home');
  const [selectedTab, setSelectedTab] = useState('');

  return (
    <div className="orders-section">
      <h2 className="form-title">Enter Address Details</h2>

      <div className="scroll-container">
        <div className="saved-location">
          <div className="location-info">
            <span className="location-emoji">📍</span>
            <div>
              <div className="location-name">Dodsworth Layout</div>
              <div className="location-address">
                367, Dodsworth Layout, Whitefield, Bengaluru, Karnataka...
              </div>
            </div>
          </div>
          <button onClick={() => setSelectedTab('LocationAlert')} className="change-btn">Change</button>
        </div>
        <div className="scrollable-form">
        <form className="address-form">
          <label>House No. & Floor*</label>
          <input type="text" placeholder="Enter details" required />

          <label>Building & Block No.*</label>
          <input type="text" placeholder="Enter details" required />

          <label>Landmark & Area Name (Optional)</label>
          <input type="text" placeholder="Enter details" />

          <label>Add Address Label</label>
          <div className="label-options">
            {['Home', 'Work', 'Other'].map((option) => (
              <button
                key={option}
                type="button"
                className={`label-btn ${label === option ? 'active' : ''}`}
                onClick={() => setLabel(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <label>Receiver Details</label>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="+91" />

          <button className="submit-btn" disabled>
            Save & Continue
          </button>
        </form>
      {selectedTab === 'LocationAlert' && (
  <LocationAlert onClose={() => setSelectedTab('')} />
)}
        </div>
      </div>
    </div>
  );
}

export default AddressForm;

