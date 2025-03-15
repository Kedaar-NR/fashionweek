
import { Dispatch, SetStateAction } from 'react';

interface ViewToggleProps {
  viewMode: 'gallery' | 'table';
  setViewMode: Dispatch<SetStateAction<'gallery' | 'table'>>;
  brandsCount: number;
}

const ViewToggle = ({ viewMode, setViewMode, brandsCount }: ViewToggleProps) => {
  return (
    <div className="mb-8 flex justify-between items-center">
      <h2 className="text-xl font-medium text-[#111]">
        {viewMode === 'table' ? 'Upcoming Drops' : 'Brand Gallery'}
      </h2>
      
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          <button 
            onClick={() => setViewMode('table')} 
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${viewMode === 'table' ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'}`}
          >
            Table View
          </button>
          <button 
            onClick={() => setViewMode('gallery')} 
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${viewMode === 'gallery' ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'}`}
          >
            Gallery View
          </button>
        </div>
        
        <div className="text-sm text-[#777]">
          <span className="font-medium text-[#111]">{brandsCount}</span> brands
        </div>
      </div>
    </div>
  );
};

export default ViewToggle;
