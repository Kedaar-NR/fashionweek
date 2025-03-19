
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

  return <main id="brand-gallery" className="container px-4 py-[15px] bg-black">
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
            className="flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Upcoming Drops <Flame className="ml-2 text-white" size={26} />
          </motion.span>
        </h2>
        
        {/* Modernized view toggle buttons */}
        <div className="flex justify-center gap-3 mt-3">
          <motion.button 
            onClick={() => setViewMode('table')} 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all min-w-[120px] shadow-sm ${viewMode === 'table' 
              ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white' 
              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Table View
          </motion.button>
          <motion.button 
            onClick={() => setViewMode('gallery')} 
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all min-w-[120px] shadow-sm ${viewMode === 'gallery' 
              ? 'bg-gradient-to-r from-gray-700 to-gray-900 text-white' 
              : 'bg-gray-800 hover:bg-gray-700 text-gray-300'}`}
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
