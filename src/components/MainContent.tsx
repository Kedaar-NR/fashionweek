
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
          <span className="flex items-center">
            Upcoming Drops <Flame className="ml-2 text-[#FCD34D]" size={26} />
          </span>
        </h2>
        
        <motion.div 
          className="py-2 px-4 rounded-full text-white font-medium brand-count-indicator shadow-sm hover:scale-105 transition-transform"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: [0.9, 1.05, 1],
            opacity: 1
          }}
          transition={{ 
            duration: 0.7,
            times: [0, 0.6, 1],
            ease: "easeOut"
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 15px rgba(14, 165, 233, 0.5)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span 
            className="flex items-center"
            animate={{ 
              color: ["#FFFFFF", "#FFDEA2", "#FFFFFF"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <Calendar size={16} className="mr-2" />
            <span>
              <motion.strong 
                className="font-bold"
                animate={{ 
                  scale: [1, 1.15, 1],
                  textShadow: [
                    "0 0 5px rgba(255,255,255,0.1)",
                    "0 0 15px rgba(255,255,255,0.5)",
                    "0 0 5px rgba(255,255,255,0.1)"
                  ]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {brands.length}
              </motion.strong> brands with upcoming drops
            </span>
          </motion.span>
        </motion.div>
        
        {/* Centered view toggle buttons */}
        <div className="flex justify-center gap-2 mt-3">
          <button onClick={() => setViewMode('table')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all min-w-[110px] ${viewMode === 'table' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}>
            Table View
          </button>
          <button onClick={() => setViewMode('gallery')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all min-w-[110px] ${viewMode === 'gallery' ? 'bg-primary text-white' : 'bg-muted hover:bg-muted/80'}`}>
            Gallery View
          </button>
        </div>
      </motion.div>
      
      {viewMode === 'table' ? <FashionWeekTable brands={brands} /> : <BrandGallery brands={brands} />}
    </main>;
};
export default MainContent;
