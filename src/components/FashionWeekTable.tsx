
import { Brand } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SortableHeader from './table/SortableHeader';
import TableSearch from './table/TableSearch';
import BrandTableRow from './table/BrandTableRow';
import useSortedBrands from '@/hooks/useSortedBrands';
import { memo, useState } from 'react';
import BrandSidebar from './BrandSidebar';

interface FashionWeekTableProps {
  brands: Brand[];
}

export const FashionWeekTable = memo(({ brands }: FashionWeekTableProps) => {
  const { 
    sortConfig, 
    searchTerm, 
    sortedBrands, 
    toggleSort, 
    handleSearch 
  } = useSortedBrands({ 
    brands,
    initialSort: { field: 'dropDate', direction: 'desc' }  // Changed to show newest dates first by default
  });

  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleBrandClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setSidebarOpen(true);
  };

  return (
    <div className="w-full overflow-auto rounded-lg p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/60 dark:to-blue-900/30 backdrop-blur-sm shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <SortableHeader 
              label={`Brand Name (${brands.length})`}
              field="name" 
              sortConfig={sortConfig} 
              onSort={toggleSort}
              className="text-left w-[250px]"
            >
              <div className="flex items-center mt-2 space-x-4">
                <TableSearch searchTerm={searchTerm} onSearch={handleSearch} />
              </div>
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
            <BrandTableRow 
              key={brand.id} 
              brand={brand} 
              onClick={() => handleBrandClick(brand)}
            />
          ))}
        </TableBody>
      </Table>

      <BrandSidebar 
        brand={selectedBrand} 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
    </div>
  );
});

export default FashionWeekTable;
