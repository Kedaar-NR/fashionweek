import { useState, useMemo, useEffect } from 'react';
import { Brand, BrandStyle, SortConfig, FilterConfig } from '@/types';
import { useScrollTrigger } from '@/utils/animations';
import BrandCard from './BrandCard';
import FilterBar from './FilterBar';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Crown, 
  Shirt, 
  Clock, 
  Scissors, 
  Palette, 
  Flame, 
  Dumbbell, 
  Leaf 
} from 'lucide-react';

interface BrandGalleryProps {
  brands: Brand[];
}

// Style icon and color mapping with improved colors
export const styleConfig: Record<BrandStyle, { icon: JSX.Element, color: string }> = {
  'streetwear': { icon: <ShoppingBag size={16} />, color: '#F97316' }, // Orange
  'goth': { icon: <Scissors size={16} />, color: '#6366F1' }, // Indigo
  'luxury': { icon: <Crown size={16} />, color: '#D946EF' }, // Pink
  'vintage': { icon: <Clock size={16} />, color: '#8B5CF6' }, // Purple
  'minimalist': { icon: <Shirt size={16} />, color: '#94A3B8' }, // Slate
  'contemporary': { icon: <Palette size={16} />, color: '#0EA5E9' }, // Sky
  'hypebeast': { icon: <Flame size={16} />, color: '#EC4899' }, // Pink
  'athletic': { icon: <Dumbbell size={16} />, color: '#14B8A6' }, // Teal
  'sustainable': { icon: <Leaf size={16} />, color: '#10B981' }, // Emerald
};

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
          
          return sortConfig.direction === 'asc' ? bDate - aDate : aDate - bDate;
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
  
  // Disable the scroll trigger for the modal since we're embedding the form
  const { isTriggered } = useScrollTrigger(300, 800);
  
  // Show feedback form after scrolling
  const [showFeedback, setShowFeedback] = useState(false);
  
  useEffect(() => {
    if (isTriggered) {
      setShowFeedback(true);
    }
  }, [isTriggered]);

  return (
    <div className="w-full">
      <FilterBar 
        totalBrands={filteredAndSortedBrands.length}
        availableStyles={availableStyles}
        filterConfig={filterConfig}
        sortConfig={sortConfig}
        onFilterChange={setFilterConfig}
        onSortChange={setSortConfig}
        styleConfig={styleConfig}
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
            <BrandCard 
              key={brand.id} 
              brand={brand} 
              index={index} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandGallery;
