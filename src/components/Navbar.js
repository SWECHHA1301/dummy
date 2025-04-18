import React from 'react'

 function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <>


      <div>
  <header>
    <div className="logo">
      <img src="logo.svg" alt="logo" />
    </div>
    <div className="ss">
      <button className="btn"><img src="ss.svg" alt="super saver" /></button>
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

        <li><i className="fa-regular fa-circle-user" style={{color: "#0d0d0c"}}></i>
          <span>Login</span>
        </li>
        <li><i className="fa fa-cart-plus" aria-hidden="true" style={{color: "#0d0d0c"}}></i>
          <span>Cart</span>
        </li>

      </ul>
    </div>
  </header>
</div>



    </>
  );
}


export default Navbar
