
import { Button } from '@/components/ui/button';
import { Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';
import React from 'react';

interface NavigationBarProps {
  userActions?: React.ReactNode;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ userActions }) => {
  return (
    <nav className="py-4 px-6 bg-gradient-to-r from-black to-[#222] text-white z-10 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shirt className="h-8 w-8 text-white" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-white">
            FashionWeek
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          {userActions}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
