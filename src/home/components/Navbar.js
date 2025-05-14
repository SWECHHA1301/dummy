import React, {useState} from 'react'
import Cart from '../../cart/Cart';
import ProfileSection from '../../profile/ProfileSection';

 function Navbar({ searchTerm, setSearchTerm }) {
  const [selectedTab, setSelectedTab] = useState('');
  
  return (
    <>
<div>
  <header>
    <div className="logo">
      <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.72.2/images/header/primary-logo.svg" alt="logo" />
    </div>
    <div className="ss">
      <button className="btn"><img src="	https://cdn.zeptonow.com/web-static-assets-prod/ar….72.2/images/super-saver/super-saver-inactive.svg" alt="super saver" /></button>
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

        <li onClick={() => setSelectedTab('ProfileSection')}><i className="fa-regular fa-circle-user" style={{color: "#0d0d0c"}}></i>
          <span><a href="/ProfileSection.jsx">Login</a></span>
        </li>
        <li onClick={() => setSelectedTab('Cart')}><i className="fa fa-cart-plus" aria-hidden="true" style={{color: "#0d0d0c"}}></i>
          <span>Cart</span>
        </li>
        
      </ul> 

      {/* {selectedTab === 'Cart' && <Cart />}
      {selectedTab === 'ProfileSection' && <ProfileSection />} */}
    </div>
  </header>
</div>



    </>
  );
}


export default Navbar;
