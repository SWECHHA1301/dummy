import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './home/components/Navbar';
import Home from './home/components/Home';
import ProfileSection from './profile/ProfileSection';
import Cart from './cart/Cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />               
        <Route path="/profile" element={<ProfileSection />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;



