import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Navbar from './components/commons/Navbar';


function App() {
  
    return(
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route   path="/" element={<Home to="/home"/>} />
          <Route  path='/home' element={<Home/>} />
          <Route path='/products' element={<Product/>}/>
        </Routes>
      </div>
    )
}

export default App;
