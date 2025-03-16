
import { useMemo, useState, useEffect } from 'react';
import { Brand, SortConfig, SortField } from '@/types';

interface UseSortedBrandsProps {
  brands: Brand[];
  initialSort?: SortConfig;
}

export const useSortedBrands = ({ 
  brands, 
  initialSort = { field: 'dropDate', direction: 'asc' } 
}: UseSortedBrandsProps) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>(initialSort);
  const [searchTerm, setSearchTerm] = useState('');

  // Set initial sort when component mounts
  useEffect(() => {
    setSortConfig(initialSort);
  }, [initialSort]);

  // Toggle sorting when clicking a column header
  const toggleSort = (field: SortField) => {
    setSortConfig(prevConfig => ({
      field,
      direction: 
        prevConfig.field === field && prevConfig.direction === 'desc' 
          ? 'asc' 
          : 'desc'
    }));
  };

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

    return filtered.sort((a, b) => {
      if (sortConfig.field === 'name') {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return sortConfig.direction === 'asc' 
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      } else {
        const dateA = new Date(a.dropDate).getTime();
        const dateB = new Date(b.dropDate).getTime();
        // For drop dates: 'asc' shows closest dates first, 'desc' shows furthest dates first
        return sortConfig.direction === 'asc' 
          ? dateA - dateB 
          : dateB - dateA;
      }
    });
  }, [brands, sortConfig, searchTerm]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return {
    sortConfig,
    searchTerm,
    sortedBrands,
    toggleSort,
    handleSearch
  };
};

export default useSortedBrands;
