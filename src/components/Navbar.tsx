import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <Dumbbell className="h-8 w-8 text-red-600" />
                <span className="text-2xl font-bold">ALPHA GYM</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Classes</a>
              <a href="#" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Schedule</a>
              <a href="#" className="hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
              <a href="#" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">Join Now</a>
            </div>
          </div>
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
            <a href="#" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Classes</a>
            <a href="#" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Schedule</a>
            <a href="#" className="hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
            <a href="#" className="bg-red-600 hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium">Join Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;