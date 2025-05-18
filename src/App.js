// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./home/components/Navbar";
// import Home from "./home/components/Home";
// import ProfileSection from "./profile/ProfileSection";
// import Cart from "./cart/Cart";
// import ProductDetail from "./ProductDetails/ProductDetail";
// import Order from './profile/components/Order';
// import OrderDetails from './orders/OrderDetails';
// import SearchPage from "./home/components/SearchPage";
// import './home/components/app.css'

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<ProfileSection />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/product/:productId" element={<ProductDetail />} />
//         <Route path="/orders" element={<Order />} />                  
//         <Route path="/order-details" element={<OrderDetails />} />
//         <Route path="/search-bar" element={<SearchPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react'
import ProductDetail from "./ProductDetails/ProductDetail";
import './ProductDetails/product.css'
export default function App() {
  return (
    <div>
    <ProductDetail/> 
    </div>
  )
}

