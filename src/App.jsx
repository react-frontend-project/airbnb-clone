
import React from 'react';

import Header from './Component/HeaderComponent/Header';
import SearchBar from './Component/SearchBarComponent/SearchBar';
import PostCarouselsContainer from './Component/PostComponent/PostCarouselsContainer';
import Footer from './Component/FooterComponent/Footer';
import Support from './Component/SupportComponent/Support';



const App = () => {
  
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <PostCarouselsContainer />
      <Footer />
      <Support />
      
    </div>
  );
};

export default App;
