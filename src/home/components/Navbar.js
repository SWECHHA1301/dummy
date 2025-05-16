import React from "react";
import { Link } from "react-router-dom";
import "./app.css";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <>
      <div>
        <header>
          <Link to={"/"} className="logo">
            <img
              src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.72.2/images/header/primary-logo.svg"
              alt="logo"
            />
          </Link>

          <div className="ss">
            <button className="btn">
              <img
                src="https://cdn.zeptonow.com/web-static-assets-prod/ar….72.2/images/super-saver/super-saver-inactive.svg"
                alt="super saver"
              />
            </button>
          </div>

          <div className="location">
            <label htmlFor="location">Select Location</label>
            <select id="location" className="custom-select">
              <option value="1"></option>
            </select>
          </div>

          <div className="search-bar">
            <i className="fa fa-search" aria-hidden="true"></i>
            <input
              type="text"
              placeholder="Search for products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="nav">
            <ul>
              <li>
                <Link className="navSideButton" to="/profile">
                  <i
                    className="fa-regular fa-circle-user"
                    style={{ color: "#0d0d0c" }}
                  ></i>
                  <span>Login</span>
                </Link>
              </li>
              <li>
                <Link className="navSideButton" to="/cart">
                  <i
                    className="fa fa-cart-plus"
                    aria-hidden="true"
                    style={{ color: "#0d0d0c" }}
                  ></i>
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
