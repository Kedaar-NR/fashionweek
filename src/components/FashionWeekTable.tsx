import { useMemo, useState } from 'react';
import { Brand, SortConfig } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp, ShoppingBag, SearchIcon } from 'lucide-react';
import { format, isAfter, isBefore, addDays, addMonths } from 'date-fns';
import { styleConfig } from './BrandGallery';
import { Input } from '@/components/ui/input';

interface FashionWeekTableProps {
  brands: Brand[];
}

export const FashionWeekTable = ({ brands }: FashionWeekTableProps) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'dropDate',
    direction: 'desc'
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Determine the date style based on how soon the drop date is
  const getDropDateStyle = (dateStr: string) => {
    const dropDate = new Date(dateStr);
    const today = new Date();
    const weekFromNow = addDays(today, 7);
    const monthFromNow = addMonths(today, 1);

    if (isBefore(dropDate, today)) {
      return "text-muted-foreground line-through"; // Past dates
    } else if (isBefore(dropDate, weekFromNow)) {
      return "text-[#ea384c] font-medium"; // Red for dates within a week
    } else if (isBefore(dropDate, monthFromNow)) {
      return "text-amber-500 font-medium"; // Yellow/Orange for dates within a month
    } else {
      return "text-green-600 font-medium"; // Green for dates over a month away
    }
  };

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
        return sortConfig.direction === 'asc' 
          ? dateB - dateA 
          : dateA - dateB;
      }
    });
  }, [brands, sortConfig, searchTerm]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full overflow-auto">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {sortedBrands.length} {sortedBrands.length === 1 ? 'brand' : 'brands'} found
        </div>
        <form onSubmit={handleSearchSubmit} className="relative">
          <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search brands..."
            className="pl-9 w-full md:w-[200px] h-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-muted/30 transition-colors w-[200px]" 
              onClick={() => toggleSort('name')}
            >
              <div className="flex items-center gap-2">
                Brand Name
                {sortConfig.field === 'name' && (
                  sortConfig.direction === 'asc' 
                    ? <ArrowUp size={14} /> 
                    : <ArrowDown size={14} />
                )}
              </div>
            </TableHead>
            <TableHead className="w-[200px]">Style</TableHead>
            <TableHead 
              className="w-[200px] cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => toggleSort('dropDate')}
            >
              <div className="flex items-center gap-2">
                Drop Date
                {sortConfig.field === 'dropDate' && (
                  sortConfig.direction === 'asc' 
                    ? <ArrowUp size={14} /> 
                    : <ArrowDown size={14} />
                )}
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedBrands.map((brand) => {
            const styleData = styleConfig[brand.style];
            return (
              <TableRow key={brand.id} className="hover:bg-muted/20">
                <TableCell>
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                    {brand.logoUrl ? (
                      <img 
                        src={brand.logoUrl} 
                        alt={`${brand.name} logo`} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ShoppingBag size={16} className="text-muted-foreground" />
                    )}
                  </div>
                </TableCell>
                <TableCell className="font-medium max-w-[200px] truncate">
                  <a 
                    href={`https://instagram.com/${brand.instagramHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-all hover:text-primary"
                    title={brand.name}
                  >
                    {brand.name}
                  </a>
                </TableCell>
                <TableCell>
                  <span 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                    style={{ 
                      backgroundColor: `${styleData.color}20`, 
                      color: styleData.color 
                    }}
                  >
                    {styleData.icon} <span className="ml-1">{brand.style}</span>
                  </span>
                </TableCell>
                <TableCell className={cn(getDropDateStyle(brand.dropDate))}>
                  {format(new Date(brand.dropDate), 'MMMM d, yyyy')}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default FashionWeekTable;
