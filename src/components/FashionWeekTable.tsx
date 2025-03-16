
import { useMemo, useState, useEffect } from 'react';
import { Brand, SortConfig } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ShoppingBag } from 'lucide-react';
import SortableHeader from './table/SortableHeader';
import TableSearch from './table/TableSearch';
import BrandTableRow from './table/BrandTableRow';

interface FashionWeekTableProps {
  brands: Brand[];
}

export const FashionWeekTable = ({ brands }: FashionWeekTableProps) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'dropDate',
    direction: 'asc'  // Show closest dates first by default
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Set initial sort to drop date (closest to furthest) when component mounts
  useEffect(() => {
    setSortConfig({
      field: 'dropDate',
      direction: 'asc'  // Show closest dates first
    });
  }, []);

  // Toggle sorting when clicking a column header
  const toggleSort = (field: 'name' | 'dropDate') => {
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

  // Function to handle search without changing sort order
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <SortableHeader 
              label="Brand Name" 
              field="name" 
              sortConfig={sortConfig} 
              onSort={toggleSort}
            >
              <TableSearch searchTerm={searchTerm} onSearch={handleSearch} />
            </SortableHeader>
            <TableHead className="w-[200px]">Style</TableHead>
            <SortableHeader 
              label="Drop Date" 
              field="dropDate" 
              sortConfig={sortConfig} 
              onSort={toggleSort}
              className="w-[200px]"
            />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedBrands.map((brand) => (
            <BrandTableRow key={brand.id} brand={brand} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FashionWeekTable;
