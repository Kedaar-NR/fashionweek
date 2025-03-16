
import { useMemo, useState, useEffect } from 'react';
import { Brand, SortConfig } from '@/types';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ArrowDown, ArrowUp, ShoppingBag, SearchIcon } from 'lucide-react';
import { format, isAfter, isBefore, addDays, addWeeks, addMonths } from 'date-fns';
import { styleConfig } from './BrandGallery';
import { Input } from '@/components/ui/input';

interface FashionWeekTableProps {
  brands: Brand[];
}

export const FashionWeekTable = ({ brands }: FashionWeekTableProps) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: 'dropDate',
    direction: 'asc'  // Changed to 'asc' to show closest dates first by default
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Set initial sort to drop date (closest to furthest) when component mounts
  useEffect(() => {
    setSortConfig({
      field: 'dropDate',
      direction: 'asc'  // Show closest dates first
    });
  }, []);

  // Determine the date style based on how soon the drop date is with updated timeframes
  const getDropDateStyle = (dateStr: string) => {
    const dropDate = new Date(dateStr);
    const today = new Date();
    const oneWeekFromNow = addDays(today, 7);
    const twoWeeksFromNow = addWeeks(today, 2);
    const oneMonthFromNow = addMonths(today, 1);

    if (isBefore(dropDate, today)) {
      return "text-muted-foreground line-through"; // Past dates
    } else if (isBefore(dropDate, oneWeekFromNow)) {
      return "text-[#ea384c] font-bold"; // Bold red for dates within a week
    } else if (isBefore(dropDate, twoWeeksFromNow)) {
      return "text-orange-500 font-medium"; // Orange for dates within two weeks
    } else if (isBefore(dropDate, oneMonthFromNow)) {
      return "text-pink-500 font-medium"; // Pink for dates within a month
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

  // Sort and filter brands with corrected sort logic
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
        // For drop dates: 'asc' shows closest dates first (ascending from today), 'desc' shows furthest dates first
        return sortConfig.direction === 'asc' 
          ? dateA - dateB 
          : dateB - dateA;
      }
    });
  }, [brands, sortConfig, searchTerm]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  // Function to handle search without changing sort order
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // No sort order changes here
  };

  return (
    <div className="w-full overflow-auto">
      <form onSubmit={handleSearchSubmit} className="relative mb-4 hidden">
        <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search brands..."
          className="pl-9 w-full md:w-[200px] h-9"
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]"></TableHead>
            <TableHead 
              className="cursor-pointer hover:bg-muted/30 transition-colors" 
              onClick={() => toggleSort('name')}
            >
              <div className="flex items-center gap-2">
                <span>Brand Name</span>
                {sortConfig.field === 'name' && (
                  sortConfig.direction === 'asc' 
                    ? <ArrowUp size={14} /> 
                    : <ArrowDown size={14} />
                )}
                
                <div className="ml-4 relative" onClick={(e) => e.stopPropagation()}>
                  <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search brands..."
                    className="pl-9 w-[180px] h-8"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
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
