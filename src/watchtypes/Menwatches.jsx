// import React from "react";
// import { fastrackProducts } from "../fastrackProducts";

// const Menwatches = () => {
//   // Filter only products where gender is "Guys"
//   const guysProducts = fastrackProducts.filter((item) => item.category === "Guys Watch");

//   return (
//     <section className="bg-white py-10 px-6">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//           Watches for Guys
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {guysProducts.map((watch) => (
//             <div
//               key={watch.id}
//               className="bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition hover:scale-105"
//             >
//               <img
//                 src={watch.image}
//                 alt={watch.name}
//                 className="w-full h-56 object-cover rounded-lg mb-4"
//               />
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {watch.name}
//               </h3>
//               <p className="text-gray-600 font-medium">₹{watch.price}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menwatches;


import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { fastrackProducts } from '../fastrackProducts.js';
import { FaRupeeSign } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";

function WatchCard() {
  const randomRating = () => +(Math.random() * 1 + 4).toFixed(1);

  // Filter only products with gender 'Guys'
  const guysProducts = fastrackProducts.filter((watch) => watch.category === "Guys Watch");

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
          Watches for Guys
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guysProducts.map((watch) => (
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
              className={`w-4 h-4 ${i < fullStars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
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
