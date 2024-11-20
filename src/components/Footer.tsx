import React from 'react';
import { Dumbbell, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Dumbbell className="h-8 w-8 text-red-600" />
              <span className="text-2xl font-bold">ALPHA GYM</span>
            </div>
            <p className="text-gray-400">
              Transform your body and mind with our state-of-the-art facilities and expert guidance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Classes</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Schedule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Villas Behind Amna Hospital ALPHA GYM</li>
              <li>Benha Qalyubia</li>
              <li>Phone: 01070809579</li>
              <li>instagram: https:/www.instagram.com/alphagymegypt</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">closes at 2AM</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 24/7</li>
              <li>Saturday: 24/7</li>
              <li>Sunday: 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ALPHA GYM. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;