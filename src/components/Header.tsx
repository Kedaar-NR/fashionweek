
import React from 'react';
import NavigationBar from './header/NavigationBar';
import HeroSection from './header/HeroSection';
import DecorativeElements from './header/DecorativeElements';

interface HeaderProps {
  brandCount: number;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ brandCount, children }) => {
  return (
    <header className="relative">
      <NavigationBar userActions={children} />
      <HeroSection brandCount={brandCount} />
      <DecorativeElements />
    </header>
  );
};

export default Header;
