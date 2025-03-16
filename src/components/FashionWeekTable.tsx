
import { Brand } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SortableHeader from './table/SortableHeader';
import TableSearch from './table/TableSearch';
import BrandTableRow from './table/BrandTableRow';
import useSortedBrands from '@/hooks/useSortedBrands';

interface FashionWeekTableProps {
  brands: Brand[];
}

export const FashionWeekTable = ({ brands }: FashionWeekTableProps) => {
  const { 
    sortConfig, 
    searchTerm, 
    sortedBrands, 
    toggleSort, 
    handleSearch 
  } = useSortedBrands({ 
    brands,
    initialSort: { field: 'dropDate', direction: 'asc' }  // Show closest dates first by default
  });

  return (
    <div className="w-full overflow-auto rounded-lg p-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900/60 dark:to-blue-900/30 backdrop-blur-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <SortableHeader 
              label="Brand Name" 
              field="name" 
              sortConfig={sortConfig} 
              onSort={toggleSort}
              className="text-left"
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
