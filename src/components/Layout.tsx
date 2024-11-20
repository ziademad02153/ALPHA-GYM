import React from 'react';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-8 w-8 text-red-600" />
            <span className="text-2xl font-bold">ALPHA GYM</span>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            {['Home', 'Classes', 'Schedule', 'Pricing'].map(item => (
              <a key={item} href="#" className="hover:text-red-600 px-3 py-2">{item}</a>
            ))}
            <a href="#" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md">Join Now</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden px-4 py-2 bg-black">
            {['Home', 'Classes', 'Schedule', 'Pricing', 'Join Now'].map(item => (
              <a key={item} href="#" className="block py-2 hover:text-red-600">{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-zinc-900 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-8 w-8 text-red-600" />
                <span className="text-2xl font-bold">ALPHA GYM</span>
              </div>
              <p className="text-gray-400">Transform your body and mind with our state-of-the-art facilities.</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <p className="text-gray-400">Villas Behind Amna Hospital ALPHA GYM</p>
              <p className="text-gray-400">Benha Qalyubia</p>
              <p className="text-gray-400">https://www.facebook.com/alphagymegypt</p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Closes at 2AM</h3>
              <p className="text-gray-400">Open All Days</p>
              <p className="text-gray-400">welcome</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} ALPHA GYM. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;