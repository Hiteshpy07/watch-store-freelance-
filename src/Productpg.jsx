import React, { useState } from "react";
import Navbar from "./Navbar";

const ProductPage = () => {
  // Dummy product data
  const product = {
    name: "Awesome Gadget",
    description:
      "This is a high-quality gadget that solves all your tech problems. Perfect for daily use and comes with a 1-year warranty.",
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
    <div className=" p-6 bg-gray-900 text-white rounded-xl shadow-lg w-full h-screen">
        <Navbar/>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center items-center bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-lg border-2 border-gray-700"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.037 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-400">{product.rating}</span>
            </div>

            <p className="text-gray-300 mt-4">{product.description}</p>
            <p className="text-gray-400 italic mt-2">
              Serial Number: {product.serial}
            </p>
             <div className="flex items-baseline space-x-4 mb-6">
              <span className="text-3xl font-bold text-green-400">₹3,395</span>
              <span className="text-lg line-through text-gray-500">₹4,245</span>
              <span className="text-md text-green-300">20% off</span>
            </div>
          
            {/* Quantity Selector */}
            <div className="flex items-center mt-4 gap-4">
              <span className="font-semibold">Quantity:</span>
              <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={handleDecrease}
                  className="px-3 py-1 bg-gray-800 hover:bg-gray-700 transition"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-900">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="px-3 py-1 bg-gray-800 hover:bg-gray-700 transition"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-gray-900 font-bold py-3 rounded-lg transition">
              Buy Now
            </button>
            <button className="flex-1 bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
