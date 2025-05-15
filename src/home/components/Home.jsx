import React, { useState } from 'react';
import Main from './Main';
import Coffee from './Coffee';
import Elevate from './Elevate';
import Store from './Store';
import HomeCom from './HomeCom';
import Meal from './Meal';
import Newstore from './Newstore';
import Howitworks from './Howitworks';
import Search from './Search';
import Categories from './Categories';
import Footer from './Footer';


function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="content-wrapper">
      <Main />
      <Coffee searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Elevate searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Store />
      <HomeCom />
      <Meal searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Newstore searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Howitworks />
      <Search />
      <Categories />
      <Footer />
    </div>
  );
}

export default Home;
