import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Productpg from './Productpg';
import Cart from './Cart'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-page" element={<Productpg/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App
