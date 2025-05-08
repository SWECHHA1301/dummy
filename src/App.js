
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Coffee from './components/Coffee';
// import Elevate from './components/Elevate'; 
// import Store from './components/Store';
// import Home from './components/Home';
// import Meal from './components/Meal';
// import Newstore from './components/Newstore';
// import Howitworks from './components/Howitworks';
// import Search from './components/Search';
// import Categories from './components/Categories';
// import Footer from './components/Footer';



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

// import { ProductDetails } from './components2/ProductDetails';
import React, { useState } from 'react';
import ProfileSection from './components2/ProfileSection';
// import LoginContinue from './components2/LoginContiune';
// import './components2/App2.css'
// import './components2/App1.css';
// import LoginForm from './components2/LoginForm';
import './components/app.css'
import './App.css'
function App() {  
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <ProfileSection searchTerm={searchTerm}/>
    
    </div>
  );
}
export default App;

