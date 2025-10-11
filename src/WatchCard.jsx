import React from 'react'
import image1 from './assets/1_2-3072_SL01.jpg'
import { Routes, Route, Link } from "react-router-dom";
const WatchCard = () => {
  return (
    <Link to="/product-page">
    <div className='bg-slate-700 w-[170px] h-[220px] mt-4 ml-3 rounded hover:scale-105 duration-200'>
        <div className='w-[90%] h-[70%] ml-[5%] pt-2  '>
            <img src={image1} className='rounded'/>
        </div>
        <div className='mt-5'>
        <div className='text-white font-sans text-lg'>
            Title
        </div>
        <div className='flex text-sm justify-between ml-2 mr-2 text-white'>
            <div>
                Price
            </div>
            <div>
                Review
            </div>
        </div>
        </div>
      </div>
      </Link>
  )
}

export default WatchCard
