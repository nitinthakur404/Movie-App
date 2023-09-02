import logo from './logo.svg';
import './App.css';
import './testuser.css'
import { useState, useEffect } from 'react';
import Navbar from './pages/Navbar';
import HomeSlider from './pages/HomeSlider';
import Home from './pages/Home';



// "backdrop_path
const App = () => {
  return (
    <div className="flex  justify-center flex-col">
      <div className='p-1  '>
        <Navbar />
      </div>
      <div className='w-full  h-full z-30 '>
        <Home />
      </div>
    </div>
  );
}

export default App;
