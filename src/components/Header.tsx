
import { motion } from 'framer-motion';
import { Brand } from '@/types';
import NavigationBar from './header/NavigationBar';
import HeroSection from './header/HeroSection';
import DecorativeElements from './header/DecorativeElements';

interface HeaderProps {
  brandCount: number;
}

const Header = ({ brandCount }: HeaderProps) => {
  return (
    <motion.header 
      initial={{
        opacity: 0
      }} 
      animate={{
        opacity: 1
      }} 
      transition={{
        duration: 0.5
      }} 
      className="relative py-12 md:py-16 overflow-hidden border-b border-[#222] bg-black text-white"
    >
      {/* Decorative elements */}
      <DecorativeElements />

      <div className="container relative z-10">
        {/* Navigation menu - blended with background */}
        <NavigationBar />
        
        {/* Hero content */}
        <HeroSection brandCount={brandCount} />
      </div>
    </motion.header>
  );
};

export default Header;
