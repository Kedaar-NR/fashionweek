
import { useMemo, useState, useCallback } from 'react';
import { Brand, SortConfig, SortField } from '@/types';

interface UseSortedBrandsProps {
  brands: Brand[];
  initialSort?: SortConfig;
}

export const useSortedBrands = ({ 
  brands, 
  initialSort = { field: 'dropDate', direction: 'desc' } // Changed to 'desc' for newest dates first
}: UseSortedBrandsProps) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(initialSort);
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle sorting when clicking a column header - made into useCallback to prevent unnecessary rerenders
  const toggleSort = useCallback((field: SortField) => {
    setSortConfig(prevConfig => ({
      field,
      direction: 
        prevConfig.field === field && prevConfig.direction === 'asc' 
          ? 'desc' 
          : 'asc'
    }));
  }, []);

  // Sort and filter brands
  const sortedBrands = useMemo(() => {
    let filtered = [...brands];
    
    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        brand => 
          brand.name.toLowerCase().includes(searchLower) || 
          brand.style.toLowerCase().includes(searchLower)
      );
    }

    const now = new Date().getTime();

    // Check for LIVE drops (happening today)
    filtered = filtered.map(brand => {
      const dropDate = new Date(brand.dropDate);
      const today = new Date();
      
      // Check if the drop is today (same day, month, and year)
      const isLive = dropDate.getDate() === today.getDate() && 
                     dropDate.getMonth() === today.getMonth() && 
                     dropDate.getFullYear() === today.getFullYear();
      
      // Add isLive property
      return {
        ...brand,
        isLive
      };
    });

    return filtered.sort((a, b) => {
      // Always prioritize LIVE drops
      if (a.isLive && !b.isLive) return -1;
      if (!a.isLive && b.isLive) return 1;
      
      if (sortConfig.field === 'name') {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return sortConfig.direction === 'asc' 
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      } else {
        // For dropDate: Calculate absolute difference from today for each date
        const dateA = new Date(a.dropDate).getTime();
        const dateB = new Date(b.dropDate).getTime();
        
        // Changed sort order logic to match the requested behavior
        // For drop dates: 'desc' shows newest dates first, 'asc' shows oldest dates first
        return sortConfig.direction === 'asc' 
          ? dateA - dateB 
          : dateB - dateA;
      }
    });
  }, [brands, sortConfig, searchTerm]);

  const handleSearch = useCallback((value: string) => {
    setSearchTerm(value);
  }, []);

  return {
    sortConfig,
    searchTerm,
    sortedBrands,
    toggleSort,
    handleSearch
  };
};

export default useSortedBrands;
