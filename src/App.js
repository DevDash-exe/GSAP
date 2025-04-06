import React from 'react';
// import Navbar from './Navbar';

import VideoBackground from './VideoBackground';
import Home from './Home';
import Seller from './Seller';
import Product from './Product';


import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <VideoBackground />
      
      
      <header className="App-header">
        <h1></h1>
      </header>
      <main>
      <Home />
      
      </main>
    </div>
  );
}

export default App;
