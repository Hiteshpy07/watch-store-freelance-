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
// import { useState, useEffect } from 'react';
// import { Heart } from 'lucide-react';
// import { fastrackProducts } from './fastrackProducts.js';
// import { FaRupeeSign } from "react-icons/fa";
// import { BiRupee } from "react-icons/bi";
// import { Star } from "lucide-react";

// function WatchCard() {
//   // Helper function: generate random float between min and max
// const randomRating = (min = 4, max = 5) => {
//   return +(Math.random() * (max - min) + min).toFixed(1);
// };

//   return (
//     <div className='bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
//       <div className='max-w-7xl mx-auto'>
//         <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 mb-4'>Featured Watches</h2>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//           {fastrackProducts.map((watch) => (
//             <SingleWatch key={watch.id} watch={watch} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function SingleWatch({ watch }) {
//   const images = watch.image_links.split('\n'); // convert links string to array
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className='bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group'>
//       <div className='relative overflow-hidden aspect-square'>
//         <img
//           src={images[currentIndex]}
//           alt={watch.name}
//           className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
//         />
//         {/* Optional: Heart icon overlay */}
        
//       </div>
//       <div className='p-4'>
//         <h3 className='text-lg font-semibold text-gray-900 mb-2'>{watch.name}</h3>
//         <div className='flex justify-around items-center'>
//           <div>
//           <span className="line-through flex items-center text-sm mr-8 text-gray-600"><BiRupee className="text-md"/>{watch.price}</span>
//           <span className='text-md font-bold text-black  flex items-center mb-3 '><FaRupeeSign className="text-md"/>{watch.discounted_price}</span>
//           </div>
//           <button className='bg-black text-white px-2 py-2 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition-colors text-sm font-medium '>
//             Buy Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WatchCard;




//updated watchcard
import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { fastrackProducts } from './fastrackProducts.js';
import { FaRupeeSign } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

function WatchCard() {
  const randomRating = () => +(Math.random() * 1 + 4).toFixed(1);

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Watches
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fastrackProducts.map((watch) => (
            <SingleWatch key={watch.id} watch={watch} randomRating={randomRating} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleWatch({ watch, randomRating }) {
  const images = watch.image_links.split('\n').filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  // Auto-slide every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  const rating = randomRating();
  const fullStars = Math.floor(rating);

  // 3D Tilt Hover Animation
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  // Trim name before 'for'
  const trimmedName = watch.name.includes('for')
    ? watch.name.substring(0, watch.name.indexOf('for')).trim()
    : watch.name;

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group [transform-style:preserve-3d] flex flex-col"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={watch.name}
            className={`w-full h-auto object-cover absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        ))}
        {/* Square aspect ratio fallback */}
        <div className="pt-[100%] invisible"></div>
      </div>

      {/* Thumbnail Carousel */}
      <div className="flex justify-center items-center space-x-1 mt-2 px-3">
        {images.slice(0, 4).map((thumb, index) => (
          <img
            key={index}
            src={thumb}
            alt={`Thumbnail ${index + 1}`}
            onMouseEnter={() => setCurrentIndex(index)}
            className={`w-8 h-8 object-cover rounded-md cursor-pointer border-2 transition-all duration-300 ${
              currentIndex === index
                ? 'border-black scale-105'
                : 'border-transparent hover:border-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Product Info */}
      <div className="p-3 flex flex-col justify-between flex-grow">
        <h3 className="text-base font-semibold text-gray-900 mb-1 leading-tight">
          {trimmedName}
        </h3>

        {/* Rating Stars */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < fullStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>

        {/* Price Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-auto gap-2">
          <div className="flex items-baseline space-x-2">
            <span className="font-semibold text-gray-800 text-base flex items-center">
              <FaRupeeSign className="text-xs" />
              {watch.discounted_price}
            </span>
            <span className="line-through text-gray-500 flex items-center text-sm">
              <BiRupee className="text-xs" />
              {watch.price}
            </span>
          </div>

          <button className="bg-black text-white w-full sm:w-fit px-3 py-1.5 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 text-sm font-medium">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WatchCard;
