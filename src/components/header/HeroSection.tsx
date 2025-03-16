
import { motion } from 'framer-motion';

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
        className="text-lg md:text-xl max-w-xl text-zinc-950"
      >
        Track upcoming drops and discover emerging designers shaping the future of fashion.
      </motion.p>
    </motion.div>
  );
};

export default HeroSection;
