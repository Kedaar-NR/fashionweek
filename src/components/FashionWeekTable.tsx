
import { Brand } from '@/types';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import SortableHeader from './table/SortableHeader';
import TableSearch from './table/TableSearch';
import BrandTableRow from './table/BrandTableRow';
import useSortedBrands from '@/hooks/useSortedBrands';
import { motion } from 'framer-motion';

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-auto"
    >
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
          {sortedBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.02, // Staggered animation
                ease: "easeOut" 
              }}
            >
              <BrandTableRow key={brand.id} brand={brand} />
            </motion.div>
          ))}
        </TableBody>
      </Table>
    </motion.div>
  );
};

export default FashionWeekTable;
