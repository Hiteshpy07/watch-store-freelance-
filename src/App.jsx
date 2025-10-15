import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home'
import Productpg from './Productpg';
import Cart from './Cart'
import Menwatches from './watchtypes/Menwatches';
import Womenwatches from './watchtypes/Womenwatches';
import Fastrackwatches from './watchtypes/Fastrackwatches';
import Fossilwatches from './watchtypes/Fossilwatches';
import Titanwatches from './watchtypes/Titanwatches';
import Sonatawatches from './watchtypes/Sonatawatches';
import Policewatches from './watchtypes/Policewatches';
import Timexwatches from './watchtypes/Timexwatches'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-page" element={<Productpg/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/watches-men" element={<Menwatches/>} />
      <Route path="/watches-women" element={<Womenwatches/>} />
      <Route path="/fastrack" element={<Fastrackwatches/>} />
      <Route path="/fossil" element={<Fossilwatches/>} />
      <Route path="/timex" element={<Timexwatches/>} />
      <Route path="/titan" element={<Titanwatches/>} />
      <Route path="/sonata" element={<Sonatawatches/>} />
      <Route path="/police" element={<Policewatches/>} />
      
    </Routes>
    </>
  )
}

export default App
