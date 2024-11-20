import React from 'react';
import { Phone, MessageCircle, Facebook, Clock, MapPin } from 'lucide-react';
import Logo from './Logo';
import FooterSection from './FooterSection';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo />
            <p className="text-gray-400 mt-4">
              Transform your body and mind with our state-of-the-art facilities and expert guidance.
            </p>
          </div>
          
          <FooterSection
            title="Contact Info"
            items={[
              { 
                text: "بعد كوبرى الفحص خلف مستشفي امنه",
                icon: <MapPin className="h-4 w-4 text-red-600" />
              },
              { text: "كفر سعد, بنها" },
              { text: "محافظه القليوبيه" },
              { 
                text: "01070809579",
                icon: <Phone className="h-4 w-4 text-red-600" />,
                href: "tel:+201070809579"
              },
              { 
                text: "01070809579",
                icon: <MessageCircle className="h-4 w-4 text-green-500" />,
                href: "https://wa.me/201070809579"
              }
            ]}
          />
          
          <FooterSection
            title="Hours"
            items={[
              { 
                text: "Open 24/7",
                icon: <Clock className="h-4 w-4 text-red-600" />
              },
              { text: "All week long" },
              { text: "Including holidays" }
            ]}
          />
          
          <FooterSection
            title="Quick Links"
            items={[
              { text: "About Us", href: "#" },
              { text: "Classes", href: "#" },
              { text: "Schedule", href: "#" },
              { text: "Contact", href: "#" }
            ]}
          />
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ALPHA GYM. All rights reserved.
            </p>
            <SocialLinks facebookUrl="https://www.facebook.com/alphagymegypt" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;