
import { useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import { Brand } from '@/types';
import { Flame, Calendar } from 'lucide-react';

interface MainContentProps {
  brands: Brand[];
}

const MainContent = ({ brandCount }: MainContentProps) => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');

  return (
    <main className="container py-12 px-4" id="brand-gallery">
      <div className="mb-8 flex flex-col items-center gap-4">
        <h2 className="text-xl font-medium text-[#111] flex items-center">
          {viewMode === 'table' ? (
            <>
              Upcoming Drops <Flame className="ml-2 text-[#F97316]" size={18} />
            </>
          ) : 'Brand Gallery'}
        </h2>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="py-2 px-4 rounded-full text-white font-medium bg-gradient-to-r from-[#0EA5E9] to-[#10B981] shadow-sm">
            <span className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span><strong className="font-bold">{brands.length}</strong> brands with upcoming drops</span>
            </span>
          </div>
        </div>
        
        {/* Centered view toggle buttons */}
        <div className="flex justify-center gap-2">
          <button 
            onClick={() => setViewMode('table')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all min-w-[110px] ${
              viewMode === 'table' 
                ? 'bg-white text-transparent bg-clip-text border border-[#eaeaea]' 
                : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
            } ${viewMode === 'table' ? 'gradient-text' : ''}`}
            style={viewMode === 'table' ? {backgroundImage: 'linear-gradient(to right, #F97316, #FB923C, #FCD34D)'} : {}}
          >
            Table View
          </button>
          <button 
            onClick={() => setViewMode('gallery')}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all min-w-[110px] ${
              viewMode === 'gallery' 
                ? 'bg-white text-transparent bg-clip-text border border-[#eaeaea]' 
                : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
            } ${viewMode === 'gallery' ? 'gradient-text' : ''}`}
            style={viewMode === 'gallery' ? {backgroundImage: 'linear-gradient(to right, #F97316, #FB923C, #FCD34D)'} : {}}
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
