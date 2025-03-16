
import { useState } from 'react';
import { BrandStyle, FilterConfig, SortConfig } from '@/types';
import { motion } from 'framer-motion';
import SearchInput from './filters/SearchInput';
import SortDropdown from './filters/SortDropdown';
import StyleFilters from './filters/StyleFilters';
import SelectedFilters from './filters/SelectedFilters';

interface FilterBarProps {
  totalBrands: number;
  availableStyles: BrandStyle[];
  filterConfig: FilterConfig;
  sortConfig: SortConfig;
  onFilterChange: (newFilter: FilterConfig) => void;
  onSortChange: (newSort: SortConfig) => void;
  styleConfig?: Record<BrandStyle, { icon: JSX.Element, color: string }>;
}

const brandStyleLabels: Record<BrandStyle, string> = {
  'streetwear': 'Streetwear',
  'goth': 'Goth',
  'luxury': 'Luxury',
  'vintage': 'Vintage',
  'minimalist': 'Minimalist',
  'contemporary': 'Contemporary',
  'hypebeast': 'Hypebeast',
  'athletic': 'Athletic',
  'sustainable': 'Sustainable',
};

export const FilterBar = ({
  totalBrands,
  availableStyles,
  filterConfig,
  sortConfig,
  onFilterChange,
  onSortChange,
  styleConfig,
}: FilterBarProps) => {
  
  const toggleStyle = (style: BrandStyle) => {
    const isSelected = filterConfig.styles.includes(style);
    let newStyles: BrandStyle[];
    
    if (isSelected) {
      newStyles = filterConfig.styles.filter(s => s !== style);
    } else {
      newStyles = [...filterConfig.styles, style];
    }
    
    onFilterChange({ ...filterConfig, styles: newStyles });
  };

  const clearFilters = () => {
    onFilterChange({ styles: [], searchTerm: '' });
  };

  const handleSearchSubmit = (value: string) => {
    onFilterChange({ ...filterConfig, searchTerm: value });
  };

  const filteredCount = filterConfig.styles.length > 0 || filterConfig.searchTerm
    ? 'Filtered'
    : 'All';

  const hasAnyFilter = filterConfig.styles.length > 0 || filterConfig.searchTerm !== '';

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-card/80 backdrop-blur-lg sticky top-0 z-10 p-4 mb-8 rounded-xl shadow-sm"
    >
      <div className="flex flex-col space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium">
              {filteredCount} Brands <span className="text-muted-foreground">({totalBrands})</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <SearchInput 
              initialValue={filterConfig.searchTerm} 
              onSearch={handleSearchSubmit} 
            />
            
            <SortDropdown 
              sortConfig={sortConfig} 
              onSortChange={onSortChange} 
            />
          </div>
        </div>
        
        <StyleFilters 
          availableStyles={availableStyles}
          selectedStyles={filterConfig.styles}
          styleLabels={brandStyleLabels}
          onToggleStyle={toggleStyle}
          onClearFilters={clearFilters}
          styleConfig={styleConfig}
          hasAnyFilter={hasAnyFilter}
        />
        
        <SelectedFilters 
          selectedStyles={filterConfig.styles} 
          onToggleStyle={toggleStyle}
          styleConfig={styleConfig}
        />
      </div>
    </motion.div>
  );
};

export default FilterBar;
