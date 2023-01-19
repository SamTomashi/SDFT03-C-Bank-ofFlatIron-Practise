import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Routes, Route, Navigate } from "react-router-dom";
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Navbar from './components/commons/Navbar';
import ItemDetails from './components/pages/ItemDetails';
import Favorites from './components/pages/Favorites';


function App() {
  
    return(
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Home/>} />
          <Route exact path="/products" element={<Product/>}/>
          <Route path="/products/:id" element={<ItemDetails/>}/>
          <Route path="/favorites" element={<Favorites/>}/>

        </Routes>
      </div>
    )
}

export default App;
