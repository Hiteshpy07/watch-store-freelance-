// import React, { useState } from "react";
// import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
// import { Routes, Route, Link } from "react-router-dom";

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const navLinks = [
//     { name: "Men", href: "#" },
//     { name: "Women", href: "#" },
//     { name: "Smart", href: "#" },
//     { name: "New Arrivals", href: "#" },
//     { name: "Sale", href: "#" },
//     { name: "Accessories", href: "#" },
//   ];

//   return (
//     <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
//       {/* --- Top Row --- */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-3 space-y-3 md:space-y-0">
//         {/* Left: Brand */}
//         <div className="text-2xl font-bold tracking-widest cursor-pointer">
//           GHADI.com
//         </div>

//         {/* Center: Search Bar */}
//         <div className="relative w-full md:w-1/2">
//           <input
//             type="text"
//             placeholder="Search for watches, collections, accessories..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full bg-neutral-800 text-white rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 placeholder-gray-400"
//           />
//           <FiSearch className="absolute right-3 top-2.5 text-gray-400 cursor-pointer" size={18} />
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center space-x-5">
//           <button className="flex items-center space-x-2 bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-full text-sm font-medium transition">
//             <FiUser size={16} />
//             <span>Account</span>
//           </button>
//           <Link to="/cart" >
//           <FiShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300" />
//           </Link>
//         </div>
//       </div>

//       {/* --- Bottom Row (Nav Links) --- */}
//       <div className="bg-neutral-900 border-t border-gray-800">
//         <ul className="flex justify-center space-x-8 py-3 text-sm font-medium">
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <a
//                 href={link.href}
//                 className="hover:text-gray-300 transition-colors duration-200"
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



import { ShoppingBag, Search, User, Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import Cart from './Cart'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Men', href: '#' },
    { name: 'Women', href: '#' },
    { name: 'Smart', href: '#' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Sale', href: '#' },
    { name: 'Accessories', href: '#' },
  ]

  return (
    <header className='bg-white text-gray-900 sticky top-0 z-50 shadow-lg'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-3 space-y-3 md:space-y-0'>
        <div className='flex items-center justify-between w-full md:w-auto'>
          <button
            className='md:hidden text-gray-700 hover:text-gray-900 mr-3'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>

          <div className='text-xl sm:text-2xl font-bold tracking-widest cursor-pointer'>
            <Link to="/">
            Rajwatches.in
            </Link>
          </div>

          <div className='md:hidden flex items-center space-x-3'>
            <button className='text-gray-700 hover:text-gray-900 transition-colors'>
              <User size={20} />
            </button>
            <button className='text-gray-700 hover:text-gray-900 transition-colors'>
              
              <ShoppingBag size={20} />
              
            </button>
          </div>
        </div>

        <div className='relative w-full md:w-1/2'>
          <input
            type='text'
            placeholder='Search for watches, collections, accessories...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-gray-100 text-gray-900 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 border border-gray-200'
          />
          <Search className='absolute right-3 top-2.5 text-gray-500 cursor-pointer' size={18} />
        </div>

        <div className='hidden md:flex items-center space-x-5'>
          <button className='flex items-center space-x-2 bg-gray-100 hover:bg-gray-400 px-3 py-2 rounded-full text-sm font-medium transition-colors'>
            <User size={16} />
            <span>Account</span>
          </button>
          <button className='text-gray-700 hover:text-gray-900  hover:bg-gray-400 transition-colors'>
            <Link to="/cart">
            <ShoppingBag size={20} />
            </Link>
          </button>
        </div>
      </div>

      <div className='bg-gray-50 border-t border-gray-200'>
        <ul className='hidden md:flex justify-center space-x-8 py-3 text-sm font-medium'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='block py-3 px-6 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors'
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
