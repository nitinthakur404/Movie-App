import logo from './logo.svg';
import './App.css';
import './testuser.css'
import { useState, useEffect } from 'react';
import Navbar from './pages/Navbar';
import HomeSlider from './pages/HomeSlider';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import Navlink from './pages/Navlink';


// "backdrop_path
const App = () => {
  return (
    <div className="flex relative justify-center flex-col">
      <div className='p-1  '>
        <Navbar />
      </div>
      <div className='w-full absolute top-20  h-full z-30 '>
        <Navlink />
      </div>
    </div>
  );
}

export default App;
