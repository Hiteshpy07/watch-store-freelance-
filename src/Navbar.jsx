import { ShoppingBag, Search, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Men', href: '/watches-men' },
    { name: 'Women', href: '/watches-women' },
    { name: 'Wall Clocks', href: '/wall-clocks' },
    { name: 'New Arrivals', href: '#' },
    { name: 'Sale', href: '#' },
  ]

  return (
    <header className='bg-white text-gray-900 sticky top-0 z-50 shadow-md'>
      {/* Top Row */}
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-3 space-y-3 sm:space-y-0'>
        {/* Logo & Menu */}
        <div className='flex items-center justify-between w-full sm:w-auto'>
          <div className='flex items-center space-x-3'>
            {/* Mobile Menu Toggle */}
            <button
              className='sm:hidden text-gray-700 hover:text-gray-900'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className='text-xl sm:text-2xl font-bold tracking-widest cursor-pointer'>
              <Link to="/">RAJ & RAJ WATCHES</Link>
            </div>
          </div>

          {/* Mobile Icons */}
          <div className='sm:hidden flex items-center space-x-4'>
            <Link to="/account" className='text-gray-700 hover:text-gray-900'>
              <User size={20} />
            </Link>
            <Link to="/cart" className='text-gray-700 hover:text-gray-900'>
              <ShoppingBag size={20} />
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className='relative w-full sm:w-1/2'>
          <input
            type='text'
            placeholder='Search for watches, collections, accessories...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full bg-gray-100 text-gray-900 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 border border-gray-200'
          />
          <Search className='absolute right-3 top-2.5 text-gray-500 cursor-pointer' size={18} />
        </div>

        {/* Desktop Icons */}
        <div className='hidden sm:flex items-center space-x-5'>
          <Link to="/account">
            <button className='flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full text-sm font-medium transition-colors'>
              <User size={16} />
              <span>Account</span>
            </button>
          </Link>
          <Link to="/cart">
            <ShoppingBag size={20} className='text-gray-700 hover:text-gray-900' />
          </Link>
        </div>
      </div>

      {/* Nav Links - Desktop */}
      <div className='bg-gray-50 border-t border-gray-200 hidden sm:block'>
        <ul className='flex justify-center space-x-8 py-3 text-sm font-medium'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className='text-gray-700 hover:text-blue-600 transition-colors duration-200'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Nav Links - Mobile */}
      {menuOpen && (
        <div className='sm:hidden bg-white border-t border-gray-200'>
          <ul className='flex flex-col'>
            {navLinks.map((link) => (
              <li key={link.name} className='border-b border-gray-200'>
                <Link
                  to={link.href}
                  className='block py-3 px-6 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors'
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
