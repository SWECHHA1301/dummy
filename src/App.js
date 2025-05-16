import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./home/components/Navbar";
import Home from "./home/components/Home";
import ProfileSection from "./profile/ProfileSection";
import Cart from "./cart/Cart";
import ProductDetails from "./product/ProductDetails";
import Order from './profile/components/Order';
import OrderDetails from './orders/OrderDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/orders" element={<Order />} />                  
        <Route path="/order-details" element={<OrderDetails />} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from 'react';
// import OrderDetails from './orders/OrderDetails';

// function App() {
//   return (
//     <div className="App">
//       <OrderDetails />
//       {/* You can add other components or routes here */}
//     </div>
//   );
// }

// export default App;
