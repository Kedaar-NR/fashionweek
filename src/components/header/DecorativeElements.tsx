
import { motion } from 'framer-motion';
import { Shirt, TrendingUp, Calendar } from 'lucide-react';

const DecorativeElements = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#F97316]/5" 
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }} 
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }} 
      />
      <motion.div 
        className="absolute top-20 -left-20 w-48 h-48 rounded-full bg-[#8B5CF6]/5" 
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0]
        }} 
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }} 
      />
      
      {/* Floating fashion icons */}
      <motion.div 
        className="absolute top-10 right-[15%] text-[#F97316]/20" 
        animate={{
          y: [0, -8, 0]
        }} 
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      >
        <Shirt size={32} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-[20%] text-[#8B5CF6]/20" 
        animate={{
          y: [0, 8, 0]
        }} 
        transition={{
          duration: 5,
          repeat: Infinity,
          delay: 1
        }}
      >
        <Calendar size={28} />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 right-[30%] text-[#10B981]/20" 
        animate={{
          y: [0, -10, 0]
        }} 
        transition={{
          duration: 6,
          repeat: Infinity,
          delay: 2
        }}
      >
        <TrendingUp size={24} />
      </motion.div>
    </div>
  );
};

export default DecorativeElements;
