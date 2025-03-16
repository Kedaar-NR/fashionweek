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
      
    </motion.div>
  );
};

export default HeroSection;
