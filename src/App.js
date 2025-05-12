
// import React, { useState } from 'react';
// import Navbar from './home/components/Navbar';
// import Main from './home/components/Main';
// import Coffee from './home/components/Coffee';
// import Elevate from './home/components/Elevate'; 
// import Store from './home/components/Store';
// import Home from './home/components/Home';
// import Meal from './home/components/Meal';
// import Newstore from './home/components/Newstore';
// import Howitworks from './home/components/Howitworks';
// import Search from './home/components/Search';
// import Categories from './home/components/Categories';
// import Footer from './home/components/Footer';
// import './home/components/app.css'



// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   return (
//     <div className="content-wrapper">
//       <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
//       <Main />
//       <Coffee searchTerm={searchTerm}/> 
//       <Elevate searchTerm={searchTerm}/>
//       <Store />
//       <Home />
//       <Meal searchTerm={searchTerm}/>
//       <Newstore searchTerm={searchTerm}/>
//       <Howitworks />
//       <Search />
//       <Categories />
//       <Footer />    
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
// import ProfileSection from './profile/ProfileSection'
// import Profile from './profile/Profile';
import Navbar from './home/components/Navbar'
import './home/components/app.css'
// import Cart from './cart/Cart';
// import Order from './orders/Order';
import OrderDetails from './orders/OrderDetails';
function App() {  
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
       {/* <ProfileSection />
      <Profile />
      <Cart />
      <Order searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      <OrderDetails />
    </div>
  );
}
export default App;

// import { useState } from "react";
// import './product/Product.css'
// import './product/components/ListItems/Item.css'
// import ProductDetails from './product/ProductDetails';
// // import Navbar from './zepto/Navbar'
// // import './zepto/zepto.css'
// function App() {  
//   const [searchTerm, setSearchTerm] = useState('');
//   return (
//     <div className="App">
//     {/* <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/> */}
//     <ProductDetails searchTerm={searchTerm}/>
//     </div>
//   );
// }
// export default App;