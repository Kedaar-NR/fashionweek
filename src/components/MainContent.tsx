
import { useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import { Brand } from '@/types';
import { Flame } from 'lucide-react';

interface MainContentProps {
  brands: Brand[];
}

const MainContent = ({ brands }: MainContentProps) => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');

  return (
    <main className="container py-12 px-4" id="brand-gallery">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="text-xl font-medium text-[#111] flex items-center">
          {viewMode === 'table' ? (
            <>
              Upcoming Drops <Flame className="ml-2 text-[#F97316]" size={18} />
            </>
          ) : 'Brand Gallery'}
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex justify-center w-full md:w-auto gap-2">
            <button 
              onClick={() => setViewMode('table')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                viewMode === 'table' 
                  ? 'bg-[#F97316] text-white hover:bg-[#F97316]/90'
                  : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
              }`}
            >
              Table View
            </button>
            <button 
              onClick={() => setViewMode('gallery')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                viewMode === 'gallery' 
                  ? 'bg-[#F97316] text-white hover:bg-[#F97316]/90'
                  : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
              }`}
            >
              Gallery View
            </button>
          </div>
          
          <div className="text-sm text-[#777]">
            <span className="font-medium text-[#111]">{brands.length}</span> brands
          </div>
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
