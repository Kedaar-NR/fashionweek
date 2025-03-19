
import React from 'react';
import { Link } from 'react-router-dom';
import { UserCountAnimation } from './UserCountAnimation';

interface NavigationBarProps {
  userActions?: React.ReactNode;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ userActions }) => {
  return (
    <nav className="py-4 px-6 bg-white text-black z-10 sticky top-0 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/50ee2037-166b-42e9-8e45-1d758b567bb5.png" 
            alt="FashionWeek Logo" 
            className="h-8 w-8" 
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] via-[#8B5CF6] to-[#10B981]">
            FashionWeek
          </span>
        </Link>
        
        <div className="flex items-center gap-4">
          <UserCountAnimation targetCount={150000} />
          {userActions}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
