
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Flame, Compass } from 'lucide-react';

interface HeroSectionProps {
  brandCount: number;
}

const HeroSection = ({ brandCount }: HeroSectionProps) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        y: 30
      }} 
      animate={{
        opacity: 1,
        y: 0
      }} 
      transition={{
        delay: 0.4,
        duration: 0.7
      }} 
      className="flex flex-col items-center text-center max-w-3xl mx-auto"
    >
      <div className="flex flex-wrap items-center justify-center gap-3 py-5">
        <motion.span 
          className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#ea384c] to-[#F97316] text-white shadow-md"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Upcoming Drops <Flame className="ml-2 text-[#FCD34D]" size={26} />
        </motion.span>
        
        <motion.button 
          className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#10B981] text-white shadow-md"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Discover Designers <Compass className="ml-2 text-[#D3E4FD]" size={20} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
