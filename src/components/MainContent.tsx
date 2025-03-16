
import { useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import { Brand } from '@/types';
import { Flame, Calendar } from 'lucide-react';

interface MainContentProps {
  brands: Brand[];
}

const MainContent = ({ brands }: MainContentProps) => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');

  return (
    <main className="container py-12 px-4" id="brand-gallery">
      <div className="mb-8 flex flex-col items-center gap-4">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: "-0.5px" }}>
          {viewMode === 'table' ? (
            <span className="flex items-center justify-center">
              UPCOMING DROPS <Flame className="ml-2 text-[#F97316]" size={18} />
            </span>
          ) : 'BRAND GALLERY'}
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="py-2 px-4 rounded-sm text-white font-medium bg-black hover:bg-neutral-900 transition-all shadow-sm animate-[pulse_2s_ease-in-out_infinite] hover:scale-105">
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <strong className="font-bold">{brands.length}</strong> brands with upcoming drops
              </span>
            </span>
          </div>
        </div>
        
        {/* Minimal view toggle buttons */}
        <div className="flex justify-center gap-2">
          <button 
            onClick={() => setViewMode('table')}
            className={`px-4 py-1.5 rounded-none text-sm font-medium transition-all min-w-[110px] uppercase tracking-wider ${
              viewMode === 'table' 
                ? 'bg-black text-white' 
                : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
            }`}
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: "1px" }}
          >
            Table View
          </button>
          <button 
            onClick={() => setViewMode('gallery')}
            className={`px-4 py-1.5 rounded-none text-sm font-medium transition-all min-w-[110px] uppercase tracking-wider ${
              viewMode === 'gallery' 
                ? 'bg-black text-white' 
                : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
            }`}
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: "1px" }}
          >
            Gallery View
          </button>
        </div>
      </div>
      
      {viewMode === 'table' ? (
        <FashionWeekTable brands={brands} />
      ) : (
        <BrandGallery brands={brands} />
      )}
    </main>
  );
};

export default MainContent;
