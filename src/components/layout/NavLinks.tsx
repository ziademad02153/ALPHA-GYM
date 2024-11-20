import React from 'react';

interface NavLinksProps {
  isMobile?: boolean;
}

const NavLinks = ({ isMobile = false }: NavLinksProps) => {
  const baseStyles = "hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium";
  const mobileStyles = "block";
  const finalStyles = `${baseStyles} ${isMobile ? mobileStyles : ''}`;

  return (
    <>
      <a href="#" className={finalStyles}>Home</a>
      <a href="#" className={finalStyles}>Classes</a>
      <a href="#" className={finalStyles}>Schedule</a>
      <a href="#" className={finalStyles}>Pricing</a>
      <a href="#" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium">Join Now</a>
    </>
  );
};

export default NavLinks;