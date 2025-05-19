import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./home/components/Navbar";
import Home from "./home/components/Home";
import ProfileSection from "./profile/ProfileSection";
import Cart from "./cart/Cart";
import ProductDetail from "./ProductDetails/ProductDetail";
import Order from "./profile/components/Order";
import SearchPage from "./home/components/SearchPage";
import "./home/components/app.css";

function App() {
   const [searchTerm, setSearchTerm] = useState(""); // ✅ Define state here

  return (
    <Router>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />{" "}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:subMenu" element={<ProfileSection />} />
      <Route path="/profile/order/:orderId" element={<ProfileSection />} />
      <Route path="/profile/*" element={<ProfileSection />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/orders" element={<Order />} />
      <Route
      path="/search-bar"
      element={<SearchPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
     />
      </Routes>
    </Router>
  );
}

export default App;

// import React from 'react'
// import ProductDetail from './ProductDetails/ProductDetail'
// export default function App() {
//   return (
//     <div>
//    <ProductDetail />
//     </div>
//   )
// }
