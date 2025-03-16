
import { useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import { Brand } from '@/types';
import { Flame, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface MainContentProps {
  brands: Brand[];
}

const MainContent = ({ brands }: MainContentProps) => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');

  return (
    <main className="container py-12 px-4" id="brand-gallery">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 flex flex-col items-center gap-2 p-6 rounded-xl bg-gradient-to-r from-[#0EA5E9] to-[#10B981] text-white shadow-md"
      >
        <h2 className="text-2xl font-bold tracking-tight">
          {viewMode === 'table' ? (
            <span className="flex items-center">
              Upcoming Drops <Flame className="ml-2 text-[#FCD34D]" size={22} />
            </span>
          ) : 'Brand Gallery'}
        </h2>
        
        <div className="flex items-center justify-center gap-2">
          <div className="py-2 px-4 rounded-full text-white font-medium bg-white/20 backdrop-blur-sm shadow-sm animate-pulse hover:scale-105 transition-transform">
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span><strong className="font-bold">{brands.length}</strong> brands with upcoming drops</span>
            </span>
          </div>
        </div>
        
        {/* Centered view toggle buttons */}
        <div className="flex justify-center gap-2 mt-2">
          <button 
            onClick={() => setViewMode('table')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all min-w-[110px] ${
              viewMode === 'table' 
                ? 'bg-white text-[#0EA5E9] border border-transparent' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Table View
          </button>
          <button 
            onClick={() => setViewMode('gallery')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all min-w-[110px] ${
              viewMode === 'gallery' 
                ? 'bg-white text-[#0EA5E9] border border-transparent' 
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Gallery View
          </button>
        </div>
      </motion.div>
      
      {viewMode === 'table' ? (
        <FashionWeekTable brands={brands} />
      ) : (
        <BrandGallery brands={brands} />
      )}
    </main>
  );
};

export default MainContent;
