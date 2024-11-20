import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavLinks from './NavLinks';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <a 
            href="tel:+201070809579"
            className="hidden md:flex items-center gap-2 text-red-600 hover:text-red-500 transition-colors"
          >
            <span className="font-semibold">01070809579</span>
          </a>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks isMobile />
            <a 
              href="tel:+201070809579"
              className="block px-3 py-2 text-red-600 font-semibold"
            >
              Call: 01070809579
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;