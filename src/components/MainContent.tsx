
import { useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import { Brand } from '@/types';
import { Flame, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface MainContentProps {
  brands: Brand[];
}

const MainContent = ({
  brands
}: MainContentProps) => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');

  return <main id="brand-gallery" className="container px-4 py-[15px] bg-gray-50">
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="mb-6 flex flex-col items-center gap-2">
        <h2 className="text-2xl font-bold tracking-tight mb-2">
          <motion.span 
            className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-[#ea384c] to-[#F97316] text-white shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Upcoming Drops <Flame className="ml-2 text-[#FCD34D]" size={26} />
          </motion.span>
        </h2>
        
        <motion.div 
          className="py-2 px-4 rounded-full font-medium"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 0.85, 1],
          }}
          transition={{ 
            duration: 1.5,
            times: [0, 0.3, 0.7, 1],
            ease: "easeInOut",
            repeat: 2,
            repeatDelay: 0.5
          }}
        >
          <span className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>
              <motion.strong 
                className="font-bold relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 cursor-pointer"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {brands.length}
              </motion.strong> brands with upcoming drops
            </span>
          </span>
        </motion.div>
        
        {/* Modernized view toggle buttons */}
        <div className="flex justify-center gap-3 mt-3">
          <motion.button 
            onClick={() => setViewMode('table')} 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all min-w-[120px] shadow-sm ${viewMode === 'table' 
              ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white' 
              : 'bg-muted hover:bg-muted/80'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Table View
          </motion.button>
          <motion.button 
            onClick={() => setViewMode('gallery')} 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all min-w-[120px] shadow-sm ${viewMode === 'gallery' 
              ? 'bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] text-white' 
              : 'bg-muted hover:bg-muted/80'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Gallery View
          </motion.button>
        </div>
      </motion.div>
      
      {viewMode === 'table' ? <FashionWeekTable brands={brands} /> : <BrandGallery brands={brands} />}
    </main>;
};

export default MainContent;
