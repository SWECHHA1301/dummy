// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./home/components/Navbar";
// import Home from "./home/components/Home";
// import ProfileSection from "./profile/ProfileSection";
// import Cart from "./cart/Cart";
// import ProductDetail from "./ProductDetails/ProductDetail";
// import Order from './profile/components/Order';
// import OrderDetails from './orders/OrderDetails';
// import SearchPage from "./home/components/SearchPage";
// import './home/components/app.css';

// function App() {
//   const [searchTerm, setSearchTerm] = useState(""); 

//   return (
//     <Router>
//       <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> 
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<ProfileSection />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/product/:productId" element={<ProductDetail />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/order-details" element={<OrderDetails />} />
//         <Route path="/search-bar" element={<SearchPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import ProductDetail from "./ProductDetails/ProductDetail";
import './ProductDetails/product.css'
import LoginForm from './login/LoginForm'
import LoginContinue from './login/LoginContinue'
import CouponsPanel from './ProductDetails/Component/CouponSlider/CouponPanel';
export default function App() {
  return (
    <div>
    <ProductDetail/> 
   <LoginForm/>
    <LoginContinue/>
    <CouponsPanel /> 
    </div>
  )
}

// import React, { useState } from 'react';
// import CouponsPanel from './ProductDetails/Component/CouponSlider/CouponPanel';

// function App() {
//   const [showPanel, setShowPanel] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowPanel(true)}>Show Coupons</button>

//       {showPanel && <CouponsPanel onClose={() => setShowPanel(false)} />}
//     </div>
//   );
// }

// export default App;


