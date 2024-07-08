import React, { useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Company', link: '/company' },
    { name: 'Shop', link: '/shop' },
    { name: 'Services', link: '/services' },
    { name: 'Projects', link: '/projects' },
    { name: 'Articles', link: '/articles' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/path-to-neuvurah-logo.png" alt="NeuvuRah" />
          </div>
          
          {windowWidth > 768 ? (
            <>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navItems.map((item) => (
                    <a>
                      key={item.name}
                      href={item.link}
                      className="text-gray-700 hover:bg-[#99CC33] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
                    
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <FaSearch className="text-gray-700 mr-4 cursor-pointer hover:text-[#FFBE06] transition duration-300" />
                <FaShoppingCart className="text-gray-700 mr-4 cursor-pointer hover:text-[#FFBE06] transition duration-300" />
                <button className="bg-[#FFBE06] text-white px-4 py-2 rounded-md hover:bg-[#99CC33] transition duration-300">
                  Request A Quote
                </button>
              </div>
            </>
          ) : (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#99CC33] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#99CC33]"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && windowWidth <= 768 && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a>
                key={item.name}
                href={item.link}
                className="text-gray-700 hover:bg-[#99CC33] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              
                {item.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <FaSearch className="text-gray-700 mr-4" />
              <FaShoppingCart className="text-gray-700 mr-4" />
              <button className="bg-[#FFBE06] text-white px-4 py-2 rounded-md hover:bg-[#99CC33] transition duration-300 w-full mt-3">
                Request A Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;