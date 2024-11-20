import React from 'react';
import { Facebook, MessageCircle } from 'lucide-react';

interface SocialLinksProps {
  facebookUrl: string;
}

const SocialLinks = ({ facebookUrl }: SocialLinksProps) => {
  return (
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
        <Facebook className="h-6 w-6" />
      </a>
      <a href="https://wa.me/201070809579" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default SocialLinks;