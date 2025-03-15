import { motion } from 'framer-motion';
import { Shirt, TrendingUp, Sparkles, Calendar } from 'lucide-react';
import { Brand } from '@/types';

interface HeaderProps {
  brandCount: number;
}

const Header = ({ brandCount }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative py-12 md:py-16 overflow-hidden border-b border-[#eaeaea] bg-gradient-to-b from-[#ffffff] to-[#fafafa]"
    >
      {/* Decorative elements */}
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
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Shirt size={32} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-[20%] text-[#8B5CF6]/20"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          <Calendar size={28} />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/2 right-[30%] text-[#10B981]/20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        >
          <TrendingUp size={24} />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-medium text-[#111] flex items-center">
              <span className="text-[#F97316] mr-2">Fashion</span>Week
              <motion.span 
                className="ml-2 text-[#F97316]"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Sparkles size={20} />
              </motion.span>
            </h2>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="text-sm">
              info@fashionweek.com
            </div>
            <div className="text-sm">©2025 <span className="ml-2 text-[#F97316] font-medium">Join 150,000 readers</span></div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto pt-6 pb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="py-3 px-6 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] rounded-full text-white font-medium shadow-md hover:shadow-lg transition-shadow"
          >
            <span className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {brandCount} brands with upcoming drops 🔥
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
