import React, { useState } from "react";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "Smart", href: "#" },
    { name: "New Arrivals", href: "#" },
    { name: "Sale", href: "#" },
    { name: "Accessories", href: "#" },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      {/* --- Top Row --- */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3 space-y-3 md:space-y-0">
        {/* Left: Brand */}
        <div className="text-2xl font-bold tracking-widest cursor-pointer">
          GHADI.com
        </div>

        {/* Center: Search Bar */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search for watches, collections, accessories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-800 text-white rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-400"
          />
          <FiSearch className="absolute right-3 top-2.5 text-gray-400 cursor-pointer" size={18} />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-5">
          <button className="flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-full text-sm font-medium transition">
            <FiUser size={16} />
            <span>Account</span>
          </button>
          <FiShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300" />
        </div>
      </div>

      {/* --- Bottom Row (Nav Links) --- */}
      <div className="bg-neutral-900 border-t border-gray-800">
        <ul className="flex justify-center space-x-8 py-3 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
