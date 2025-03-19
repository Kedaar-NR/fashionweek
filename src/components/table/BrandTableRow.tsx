
import { Brand } from '@/types';
import { TableRow, TableCell } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ShoppingBag } from 'lucide-react';
import { format } from 'date-fns';
import { styleConfig } from '../BrandGallery';
import { getDropDateStyle } from '@/utils/dateUtils';

interface BrandTableRowProps {
  brand: Brand;
  onClick?: () => void;
}

const BrandTableRow = ({ brand, onClick }: BrandTableRowProps) => {
  const styleData = styleConfig[brand.style];
  
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
        <span 
          className="hover:underline transition-all hover:text-primary truncate block"
          title={brand.name}
        >
          {brand.name}
        </span>
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
