import React from 'react';
import { Link } from 'react-router-dom';
import "./App.css";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div>
        <header>
          <div className="logo">
            <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.72.2/images/header/primary-logo.svg" alt="logo" />
          </div>

          <div className="ss">
            <button className="btn">
              <img src="https://cdn.zeptonow.com/web-static-assets-prod/ar….72.2/images/super-saver/super-saver-inactive.svg" alt="super saver" />
            </button>
          </div>

          <div className="location">
            <label htmlFor="location">Select Location</label>
            <select id="location" className="custom-select">
              <option value="1"></option>
            </select>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
          </div>

          <div className="nav">
            <ul>
              <li>
                <i className="fa-regular fa-circle-user" style={{ color: "#0d0d0c" }}></i>
                <span><Link to="/profile">Login</Link></span>
              </li>
              <li>
                <i className="fa fa-cart-plus" aria-hidden="true" style={{ color: "#0d0d0c" }}></i>
                <span><Link to="/cart">Cart</Link></span>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;

