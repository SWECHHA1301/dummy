import React, { useState } from 'react';
import "./ProfileSection.css";
import Orders from './components/Orders'; // No orders component
import OrderList from './components/Order'; // Component that shows order list
import CustomerSupport from './components/CustomerSupport';
import Profile from "./components/Profile";
import AddressForm from './components/AddressForm';



const orders = [
  {
    id: 1,
    title: "Hachiko Scissor Nail Clipper",
    price: "₹265",
    status: "Cancelled",
    statusColor: "red",
    date: "May 04",
    reason: "As per your request, your item has been cancelled.",
    image:
      "https://rukminim2.flixcart.com/image/200/200/xif0q/pet-nail-clipper/m/2/z/best-quality-combo-of-2-dog-product-nail-claipper-hair-flea-comb-original-imagh4wzhypysthz.jpeg?q=90",
    rating: 3,
  },
];

const ProfileSection = () => {
  const [selectedTab, setSelectedTab] = useState('orders');

  return (
    <div className="main-container">
      <div className="profile-container">
        <div className="profile-header">
          <img
            src="https://cdn.zeptonow.com/production/app/svg/ProfileIconNonMember.svg"
            alt="User"
            className="profile-avatar"
          />
          <div className="profile-info">
            <h2>John Doe</h2>
            <p>+91 9876543210</p>
          </div>
        </div>

        <div className="zepto-cash-card">
          <div className="zepto-card-title-row">
            <img src="https://www.zeptonow.com/images/wallet.svg" alt="Wallet Icon" className="wallet-icon" />
            <span className="zepto-title">Zepto Cash & Gift Card</span>
          </div>
          <div className="card-dashed-line"></div>
          <div className="zepto-balance-row">
            <span className="zepto-balance">Available Balance: ₹0</span>
            <button className="add-balance-btn">Add Balance</button>
          </div>
        </div>

        <div className="free-cash-card">
          <div className="free-cash-row">
            <span className="free-cash-label">🎁 Free Cash</span>
            <span className="free-cash-amount">₹50</span>
          </div>
        </div>

        <div className="profile-options">
          <div onClick={() => setSelectedTab('orders')} className="option-item">
            <img src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000" alt="orders" />
            <span>Orders</span>
          </div>
          <div onClick={() => setSelectedTab('AddressForm')} className="option-item">
            <img src="https://img.icons8.com/?size=100&id=53383&format=png&color=000000" alt="Address" />
            <span>Addresses</span>
          </div>
          <div onClick={() => setSelectedTab('profile')} className="option-item">
            <i className="fa-regular fa-circle-user" style={{ color: "#0d0d0c" }}></i>
            <span>Profile</span>
          </div>
          <div className="option-item logout">
            <span>Logout</span>
          </div>
        </div>
      </div>

      <div className="right-section">
      {selectedTab === 'orders' && (
        orders.length > 0 ? <OrderList orders={orders} /> : <Orders />
      )}
      {selectedTab === 'AddressForm' && <AddressForm />}
      {selectedTab === 'profile' && <Profile />}
    </div>
    </div>
  );
};

export default ProfileSection;

