
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Flame } from 'lucide-react';

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
      <div className="flex flex-col items-center justify-center gap-3 py-5">
        <motion.span 
          className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#ea384c] to-[#F97316] text-white shadow-md"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Upcoming Drops <Flame className="ml-2 text-[#FCD34D]" size={26} />
        </motion.span>
        
        <motion.p 
          initial={{
            opacity: 0,
            y: 20
          }} 
          animate={{
            opacity: 1,
            y: 0
          }} 
          transition={{
            delay: 0.8,
            duration: 0.5
          }} 
          className="text-lg md:text-xl max-w-xl text-zinc-950 mt-3"
        >
          Track upcoming drops and discover emerging designers shaping the future of fashion.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroSection;
