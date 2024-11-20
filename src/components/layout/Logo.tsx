import React from 'react';
import { Dumbbell } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <div className="flex items-center gap-2">
        <Dumbbell className="h-8 w-8 text-red-600" />
        <span className="text-2xl font-bold">ALPHA GYM</span>
      </div>
    </div>
  );
};

export default Logo;