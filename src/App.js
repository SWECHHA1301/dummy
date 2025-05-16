// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './home/components/Navbar';
// import Home from './home/components/Home';
// import ProfileSection from './profile/ProfileSection';
// import Cart from './cart/Cart';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />               
//         <Route path="/profile" element={<ProfileSection />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import LoginForm from './login/LoginForm';
import LoginContinue from './login/LoginContinue';



function App() {
  return (
    <div>
     <LoginForm />
     <LoginContinue />
    </div>
  );
}
export default App;

// background-image: url('leftLogin.svg');
// background-image: url('https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.68.0/_next/static/media/bg-desktop.7efcec3a.png');


