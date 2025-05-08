import React from 'react';
import './Profile.css'; // External CSS file

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="	https://cdn.zeptonow.com/production/app/svg/ProfileIconNonMember.svg"
          alt="User"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h2>John Doe</h2>
          <p>+91 9876543210</p>
        </div>
      </div>

      <div class="zepto-cash-card">
  <div class="zepto-card-title-row">
    <img src="https://www.zeptonow.com/images/wallet.svg" alt="Wallet Icon" class="wallet-icon" />
    <span class="zepto-title">Zepto Cash & Gift Card</span>
  </div>
  <div class="card-dashed-line"></div>
  <div class="zepto-balance-row">
    <span class="zepto-balance">Available Balance: ₹0</span>
    <button class="add-balance-btn">Add Balance</button>
  </div>
</div>

<div className="free-cash-card">
  <div className="free-cash-row">
    <span className="free-cash-label">🎁 Free Cash</span>
    <span className="free-cash-amount">₹50</span>
  </div>
</div>

      <div className="profile-options">
        <div className="option-item">
        <img src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000" alt="orders" />
          <span>Orders</span>
        </div>
        <div className="option-item">
          <img src="https://img.icons8.com/?size=100&id=d7iUgF8ZrDaO&format=png&color=000000" alt="customersupport" />
          <span>Customer Support</span>
        </div>
        <div className="option-item">
         <i className="fa-regular fa-heart" style={{color: "#0d0d0c"}}></i>
          <span>Manage Referrals</span>
        </div>
        <div className="option-item">
          <img src="https://img.icons8.com/?size=100&id=53383&format=png&color=000000" alt="Address" />
          <span>Addresses</span>
        </div>
        <div className="option-item">
        <i className="fa-regular fa-circle-user" style={{color: "#0d0d0c"}}></i>
          <span>Profile</span>
        </div>
        <div className="option-item logout">
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
