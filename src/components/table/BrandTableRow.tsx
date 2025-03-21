
import { Brand } from '@/types';
import { TableRow, TableCell } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ShoppingBag, Bookmark, BookmarkCheck } from 'lucide-react';
import { format } from 'date-fns';
import { styleConfig } from '../BrandGallery';
import { getDropDateStyle } from '@/utils/dateUtils';
import { useSavedBrands } from '@/context/SavedBrandsContext';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

interface BrandTableRowProps {
  brand: Brand;
  onClick?: () => void;
}

const BrandTableRow = ({ brand, onClick }: BrandTableRowProps) => {
  const styleData = styleConfig[brand.style];
  const { savedBrands, toggleSavedBrand } = useSavedBrands();
  const { user } = useAuth();
  const isSaved = !!savedBrands[brand.id];
  
  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSavedBrand(brand);
  };
  
  return (
    <TableRow 
      key={brand.id} 
      className="hover:bg-muted/20 cursor-pointer"
      onClick={onClick}
    >
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
      <TableCell className="font-medium truncate text-left max-w-[250px]">
        <div className="flex items-center gap-2">
          <span 
            className="hover:underline transition-all hover:text-primary truncate block"
            title={brand.name}
          >
            {brand.name}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-7 w-7 rounded-full",
              isSaved ? "text-primary" : "text-muted-foreground opacity-70 hover:opacity-100"
            )}
            onClick={handleSaveClick}
            title={isSaved ? "Remove from saved" : "Save brand"}
          >
            {isSaved ? (
              <BookmarkCheck className="h-4 w-4" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </Button>
        </div>
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
};

export default BrandTableRow;
