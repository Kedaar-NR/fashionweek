
import { useState, useMemo, useEffect } from 'react';
import { Brand, BrandStyle, SortConfig, FilterConfig } from '@/types';
import { useScrollTrigger } from '@/utils/animations';
import BrandCard from './BrandCard';
import FilterBar from './FilterBar';
import SubscribeModal from './SubscribeModal';
import { motion } from 'framer-motion';

interface BrandGalleryProps {
  brands: Brand[];
}

export const BrandGallery = ({ brands }: BrandGalleryProps) => {
  // Sort and filter states
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'dropDate',
    direction: 'desc'
  });
  
  const [filterConfig, setFilterConfig] = useState<FilterConfig>({
    styles: [],
    searchTerm: ''
  });
  
  // Extract all unique brand styles
  const availableStyles = useMemo<BrandStyle[]>(() => {
    const styles = new Set<BrandStyle>();
    brands.forEach(brand => styles.add(brand.style));
    return Array.from(styles);
  }, [brands]);
  
  // Filter and sort brands
  const filteredAndSortedBrands = useMemo(() => {
    let result = [...brands];
    
    // Apply style filters
    if (filterConfig.styles.length > 0) {
      result = result.filter(brand => filterConfig.styles.includes(brand.style));
    }
    
    // Apply search term filter
    if (filterConfig.searchTerm) {
      const searchLower = filterConfig.searchTerm.toLowerCase();
      result = result.filter(
        brand => 
          brand.name.toLowerCase().includes(searchLower) || 
          brand.style.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      let aValue = a[sortConfig.field];
      let bValue = b[sortConfig.field];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        if (sortConfig.field === 'dropDate') {
          // For dates, convert to timestamp for comparison
          const aDate = new Date(aValue).getTime();
          const bDate = new Date(bValue).getTime();
          
          return sortConfig.direction === 'asc' ? aDate - bDate : bDate - aDate;
        } else {
          // For strings, convert to lowercase for case-insensitive sorting
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
          
          if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
          if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
          return 0;
        }
      }
      
      return 0;
    });
    
    return result;
  }, [brands, filterConfig, sortConfig]);
  
  // Scroll trigger for subscribe modal - reduced threshold to trigger sooner
  const { isTriggered, setIsTriggered } = useScrollTrigger(300, 800);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Show modal when scroll trigger activates
  useEffect(() => {
    if (isTriggered) {
      setIsModalOpen(true);
      setIsTriggered(false);
    }
  }, [isTriggered, setIsTriggered]);

  return (
    <div className="w-full">
      <FilterBar 
        totalBrands={filteredAndSortedBrands.length}
        availableStyles={availableStyles}
        filterConfig={filterConfig}
        sortConfig={sortConfig}
        onFilterChange={setFilterConfig}
        onSortChange={setSortConfig}
      />
      
      {filteredAndSortedBrands.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <h3 className="text-xl font-medium mb-2">No brands found</h3>
          <p className="text-muted-foreground mb-6">
            Try adjusting your filters or search terms
          </p>
          <button
            onClick={() => setFilterConfig({ styles: [], searchTerm: '' })}
            className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
          >
            Clear all filters
          </button>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAndSortedBrands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      )}
      
      <SubscribeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        typeformUrl="https://form.typeform.com/to/Q5fonbTT"
      />
    </div>
  );
};

export default BrandGallery;
