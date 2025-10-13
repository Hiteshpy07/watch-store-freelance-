// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import { Link } from "react-router-dom";

// const ProductPage = () => {
//   // Dummy product data
//   const product = {
//     name: "Awesome Gadget",
//     description:
//       "This is a high-quality gadget that solves all your tech problems. Perfect for daily use and comes with a 1-year warranty djienv ervjeiw ivne ewveeno efgeg  egefget  ergegewr  ergweger efgeefv ergtrfd rfgbfebrgb rberbrb",
//     serial: "SN123456789",
//     price: 4999,
//     image: "https://via.placeholder.com/400",
//     rating: 4.5, // out of 5
//   };

//   const [quantity, setQuantity] = useState(1);

//   const handleDecrease = () => {
//     if (quantity > 1) setQuantity(quantity - 1);
//   };

//   const handleIncrease = () => {
//     setQuantity(quantity + 1);
//   };

//   return (
//     <div className=" p-6 bg-black text-white  shadow-lg w-full h-screen">
//         <Navbar/>
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Product Image */}
//         <div className="md:w-[40%] h-[400px] mt-4 flex justify-center items-center bg-slate-500">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full max-w-sm rounded-lg border-2 border-gray-700"
//           />
//         </div>

//         {/* Product Details */}
//         <div className="md:w-1/2 flex flex-col justify-between">
//           <div>
//             <h1 className="text-3xl font-bold mt-2">Watch_Name</h1>

//             {/* Rating */}
//             <div className="flex items-center mt-2">
//               {Array.from({ length: 5 }, (_, i) => (
//                 <svg
//                   key={i}
//                   className={`w-5 h-5 ${
//                     i < Math.floor(product.rating)
//                       ? "text-yellow-400"
//                       : "text-gray-600"
//                   }`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.037 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
//                 </svg>
//               ))}
//               <span className="ml-2 text-gray-400 text-sm">{product.rating}</span>
//             </div>

//             <p className="text-gray-300 mt-4">{product.description}</p>
//             <p className="text-gray-400 italic mt-4">
//               Serial Number: {product.serial}
//             </p>
//              <div className="flex items-baseline space-x-4 mb-6 mt-4">
//               <span className="text-3xl font-bold text-green-400">₹3,395</span>
//               <span className="text-lg line-through text-gray-500">₹4,245</span>
//               <span className="text-md text-green-300">20% off</span>
//             </div>
          
//             {/* Quantity Selector */}
//             <div className="flex items-center mt-4 gap-4">
//               <span className="font-semibold">Quantity:</span>
//               <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
//                 <button
//                   onClick={handleDecrease}
//                   className="px-3 py-1 bg-gray-800 hover:bg-gray-700 transition"
//                 >
//                   -
//                 </button>
//                 <span className="px-4 py-1 bg-gray-900">{quantity}</span>
//                 <button
//                   onClick={handleIncrease}
//                   className="px-3 py-1 bg-gray-800 hover:bg-gray-700 transition"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="mt-6 flex flex-col sm:flex-row gap-4">
//             <button className="flex-1 bg-slate-700 border-2 border-white hover:bg-white text-white hover:text-gray-900 font-bold py-3 rounded-lg transition">
//               Buy Now
//             </button>
            
//             <button className="flex-1 bg-white hover:bg-black text-gray-900 hover:text-white hover:border-2 hover:border-white font-bold py-3 rounded-lg transition">
//               <Link to="/cart">
//               Add to Cart
//               </Link>
//             </button>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { fastrackProducts } from './fastrackProducts.js';

const ProductPage = () => {
  const product = {
    name: "Awesome Gadget",
    description:
      "This is a high-quality gadget that solves all your tech problems. Perfect for daily use and comes with a 1-year warranty. Designed to last and built with premium materials for long-term use.",
    serial: "SN123456789",
    price: 4999,
    image: "https://via.placeholder.com/400",
    rating: 4.5, // out of 5
  };

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 p-4 sm:p-6">
      <Navbar />
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Product Image */}
        <div className="md:w-1/2 h-[400px] flex justify-center items-center bg-gray-200 rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-lg border border-gray-300"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.037 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-500 text-sm">{product.rating}</span>
            </div>

            {/* Description */}
            <p className="text-gray-700 mt-4">{product.description}</p>
            <p className="text-gray-500 italic mt-4">
              Serial Number: {product.serial}
            </p>

            {/* Price */}
            <div className="flex items-baseline space-x-4 mb-6 mt-4">
              <span className="text-3xl font-bold text-black">₹3,395</span>
              <span className="text-lg line-through text-gray-600">₹4,245</span>
              <span className="text-md text-black ">20% off</span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center mt-4 gap-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={handleDecrease}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-gray-800 text-white hover:bg-gray-200 hover:text-black hover:border-2 hover:border-gray-800 font-bold py-3 rounded-lg transition">
              Buy Now
            </button>

            <Link
              to="/cart"
              className="flex-1 hover:bg-white bg-gray-800 text-white border border-gray-800 hover:text-black font-bold py-3 rounded-lg text-center transition"
            >
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;


