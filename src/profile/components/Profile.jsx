import React, { useState } from "react";
import "./Profile.css";

const ProfileSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="profile-container">
      <div className="profile-card">
      <div className="profile-avatar-container">
  <img
    src="https://cdn.zeptonow.com/production/app/svg/ProfileIconNonMember.svg"
    alt="Profile Avatar"
    className="profile-avatar-image"
  />
</div>

      

        <form className="profile-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>

            <small>We promise not to spam you</small>
          
          <button type="submit" className="btn-pink">
            Submit
          </button>
        </form>

        <div className="delete-section">
          <button className="btn-delete">Delete Account</button>
          <p>
            Deleting your account will remove all your orders, wallet amount and
            any active referral
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;