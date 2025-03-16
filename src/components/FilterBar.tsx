import { useState } from 'react';
import { BrandStyle, FilterConfig, SortConfig } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ArrowDownIcon, ArrowUpIcon, SearchIcon, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';

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
  const [searchValue, setSearchValue] = useState(filterConfig.searchTerm);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ ...filterConfig, searchTerm: searchValue });
  };

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
    setSearchValue('');
  };

  const handleSortChange = (value: string) => {
    const [field, direction] = value.split('-') as [any, any];
    onSortChange({ field, direction });
  };

  const getSortValue = () => `${sortConfig.field}-${sortConfig.direction}`;

  const filteredCount = filterConfig.styles.length > 0 || filterConfig.searchTerm
    ? 'Filtered'
    : 'All';

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
            <form onSubmit={handleSearchSubmit} className="relative">
              <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search brands..."
                className="pl-9 w-full md:w-[200px] h-9"
                value={searchValue}
                onChange={handleSearchChange}
              />
            </form>
            
            <Select
              value={getSortValue()}
              onValueChange={handleSortChange}
            >
              <SelectTrigger className="w-[160px] h-9">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dropDate-desc">
                  <div className="flex items-center">
                    <span>Newest First</span>
                    <ArrowDownIcon className="ml-2 h-3 w-3" />
                  </div>
                </SelectItem>
                <SelectItem value="dropDate-asc">
                  <div className="flex items-center">
                    <span>Oldest First</span>
                    <ArrowUpIcon className="ml-2 h-3 w-3" />
                  </div>
                </SelectItem>
                <SelectItem value="name-asc">
                  <div className="flex items-center">
                    <span>Name (A-Z)</span>
                    <ArrowUpIcon className="ml-2 h-3 w-3" />
                  </div>
                </SelectItem>
                <SelectItem value="name-desc">
                  <div className="flex items-center">
                    <span>Name (Z-A)</span>
                    <ArrowDownIcon className="ml-2 h-3 w-3" />
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <ScrollArea className="w-full">
            <div className="style-filters-scroll pr-4">
              {availableStyles.map((style) => {
                const styleData = styleConfig?.[style];
                return (
                  <button
                    key={style}
                    onClick={() => toggleStyle(style)}
                    className={`filter-button flex items-center gap-1 ${filterConfig.styles.includes(style) ? 'active' : ''}`}
                    style={styleData && !filterConfig.styles.includes(style) ? {color: styleData.color} : {}}
                  >
                    {styleData?.icon} {brandStyleLabels[style]}
                  </button>
                );
              })}
            </div>
          </ScrollArea>
          
          {(filterConfig.styles.length > 0 || filterConfig.searchTerm) && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="mt-2 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-1" />
              Clear
            </Button>
          )}
        </div>
        
        {filterConfig.styles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {filterConfig.styles.map(style => {
              const styleData = styleConfig?.[style];
              return (
                <Badge 
                  key={style} 
                  variant="secondary" 
                  className="capitalize flex items-center gap-1"
                  style={styleData ? {backgroundColor: `${styleData.color}20`, color: styleData.color} : {}}
                >
                  {styleData?.icon} {style}
                  <X 
                    className="h-3 w-3 ml-1 cursor-pointer" 
                    onClick={() => toggleStyle(style)}
                  />
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FilterBar;
