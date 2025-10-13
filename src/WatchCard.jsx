// import React from 'react'
// import image1 from './assets/1_2-3072_SL01.jpg'
// import { Routes, Route, Link } from "react-router-dom";
// const WatchCard = () => {
//   return (
//     <Link to="/product-page">
//     <div className='bg-slate-700 w-[170px] h-[220px] mt-4 ml-3 rounded hover:scale-105 duration-200'>
//         <div className='w-[90%] h-[70%] ml-[5%] pt-2  '>
//             <img src={image1} className='rounded'/>
//         </div>
//         <div className='mt-5'>
//         <div className='text-white font-sans text-lg'>
//             Title
//         </div>
//         <div className='flex text-sm justify-between ml-2 mr-2 text-white'>
//             <div>
//                 Price
//             </div>
//             <div>
//                 Review
//             </div>
//         </div>
//         </div>
//       </div>
//       </Link>
//   )
// }

import { ShowerHead } from "lucide-react"

// export default WatchCard


// import { Heart } from 'lucide-react'
// import {fastrackProducts} from './fastrackProducts.js'

// function WatchCard() {
  

//   return (
//     <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
//       <div className='max-w-7xl mx-auto'>
//         <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Featured Watches</h2>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//           {fastrackProducts.map((watch) => (
//             <div key={watch.id} className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group'>
//               <div className='relative overflow-hidden aspect-square'>
//                 <img
//                   // src="https://ik.imagekit.io/5qrepdiow/RAJ_WATCHES/FASTRACK_LIST/images/2-3072_SL01/1_2-3072_SL01.jpg"
//                   src={watch.image_links.split('\n')[0]}
//                   alt={watch.name}
//                   className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
//                 />
                
                
//               </div>
//               <div className='p-4'>
//                 <h3 className='text-lg font-semibold text-gray-900 mb-2'>{watch.name}</h3>
//                 <div className='flex justify-between items-center'>
//                   <span className='text-xl font-bold text-blue-600'>{watch.price}</span>
//                   <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium'>
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default WatchCard






// 3rd part with mini slide Show in it
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { fastrackProducts } from './fastrackProducts.js';
import { FaRupeeSign } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

function WatchCard() {
  return (
    <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Featured Watches</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {fastrackProducts.map((watch) => (
            <SingleWatch key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleWatch({ watch }) {
  const images = watch.image_links.split('\n'); // convert links string to array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group'>
      <div className='relative overflow-hidden aspect-square'>
        <img
          src={images[currentIndex]}
          alt={watch.name}
          className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        {/* Optional: Heart icon overlay */}
        
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-900 mb-2'>{watch.name}</h3>
        <div className='flex justify-between items-center'>
          <span className='text-lg font-bold text-black  flex items-center '><FaRupeeSign className="text-md"/>{watch.discounted_price}</span>
          <span className="line-through flex items-center text-md mr-8"><BiRupee className="text-md"/>{watch.price}</span>
          <button className='bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors text-sm font-medium'>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchCard;
