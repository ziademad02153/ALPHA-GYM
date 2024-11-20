import React, { ReactNode } from 'react';

interface HeroButtonProps {
  children: ReactNode;
  primary?: boolean;
}

const HeroButton = ({ children, primary = false }: HeroButtonProps) => {
  const baseStyles = "px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 transition duration-300";
  const primaryStyles = "bg-red-600 hover:bg-red-700 text-white";
  const secondaryStyles = "border-2 border-white hover:bg-white hover:text-black text-white";

  return (
    <button className={`${baseStyles} ${primary ? primaryStyles : secondaryStyles}`}>
      {children}
    </button>
  );
};

export default HeroButton;