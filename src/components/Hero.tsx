
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.header 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }} 
      className="relative py-6 md:py-8 overflow-hidden border-b border-[#eaeaea]"
    >
      <div className="container relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-medium text-[#111]">FashionWeek</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm">
              info@fashionweek.com
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.5 }} 
          className="flex flex-col items-start max-w-5xl mx-auto"
        >
          <motion.p 
            className="text-md bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#D946EF] font-medium max-w-xl mt-4" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Track upcoming drops and discover emerging designers shaping the future of fashion.
          </motion.p>
          
          <div className="flex justify-between w-full items-end mt-12">
            <div className="max-w-xs">
              <div className="text-lg font-light text-[#777] italic">©2025 Join 150,000 readers</div>
            </div>
            
            <div className="text-right">
              <div className="text-xs text-[#777] uppercase">// JOIN</div>
              <div className="text-5xl font-bold text-[#111]">320K</div>
              <div className="text-xs text-[#555] uppercase">CHANGEMAKERS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Hero;
