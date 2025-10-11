import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Productpg from './Productpg';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-page" element={<Productpg/>} />
    </Routes>
    </>
  )
}

export default App
