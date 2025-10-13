import React, { useState } from "react";
import { SlidersHorizontal } from "lucide-react"; // optional icon for header

const FilterSidebar = ({ onFilterChange }) => {
  const [price, setPrice] = useState(5000);
  const [gender, setGender] = useState("");
  const [brands, setBrands] = useState([]);

  const handleBrandChange = (brand) => {
    setBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((b) => b !== brand)
        : [...prev, brand]
    );
  };

  const applyFilters = () => {
    onFilterChange?.({ price, gender, brands });
  };

  return (
    <aside className="w-64 min-h-screen bg-white shadow-md border-r border-gray-200 p-6 flex flex-col space-y-6 sticky top-0">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <SlidersHorizontal size={20} /> Filters
        </h2>
      </div>

      {/* Price Filter */}
      {/* <div>
        <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>₹0</span>
          <span>₹{price}</span>
          <span>₹10000</span>
        </div>
        <input
          type="range"
          min="0"
          max="10000"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full accent-indigo-600"
        />
      </div> */}
      <div>
  <h3 className="font-semibold text-gray-700 mb-2">Price Range</h3>
  <div className="flex justify-between text-sm text-gray-500 mb-1">
    <span>₹0</span>
    <span>₹{price}</span>
    <span>₹10000</span>
  </div>

  {/* Black & White Themed Range Slider */}
  <input
    type="range"
    min="0"
    max="10000"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
    className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-black"
  />
</div>


      {/* Gender Filter */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Gender</h3>
        <div className="space-y-2">
          {["Men", "Women"].map((option) => (
            <label
              key={option}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="gender"
                value={option}
                checked={gender === option}
                onChange={(e) => setGender(e.target.value)}
                className="accent-indigo-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold text-gray-700 mb-2">Brands</h3>
        <div className="space-y-2">
          {["Fastrack", "Sonata", "Titan"].map((brand) => (
            <label
              key={brand}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                value={brand}
                checked={brands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
                className="accent-indigo-600"
              />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Button */}
      <button
        onClick={applyFilters}
        className="mt-auto w-full py-2 px-4 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Apply Filters
      </button>
    </aside>
  );
};

export default FilterSidebar;
