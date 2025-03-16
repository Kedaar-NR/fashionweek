
import { Brand } from '@/types';
import { TableRow, TableCell } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { ShoppingBag, ExternalLink } from 'lucide-react';
import { format } from 'date-fns';
import { styleConfig } from '../BrandGallery';
import { getDropDateStyle } from '@/utils/dateUtils';
import { motion } from 'framer-motion';

interface BrandTableRowProps {
  brand: Brand;
}

const BrandTableRow = ({ brand }: BrandTableRowProps) => {
  const styleData = styleConfig[brand.style];
  
  return (
    <TableRow className="hover:bg-muted/20 group">
      <TableCell>
        <motion.div 
          whileHover={{ scale: 1.2, rotate: 5 }}
          className="w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center"
        >
          {brand.logoUrl ? (
            <img 
              src={brand.logoUrl} 
              alt={`${brand.name} logo`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <ShoppingBag size={16} className="text-muted-foreground" />
          )}
        </motion.div>
      </TableCell>
      <TableCell className="font-medium max-w-[200px] truncate">
        <a 
          href={`https://instagram.com/${brand.instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all hover:text-primary flex items-center gap-1"
          title={brand.name}
        >
          {brand.name}
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="text-xs text-gray-500"
          >
            <ExternalLink size={12} />
          </motion.span>
        </a>
      </TableCell>
      <TableCell>
        <motion.span 
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
          style={{ 
            backgroundColor: `${styleData.color}20`, 
            color: styleData.color 
          }}
        >
          {styleData.icon} <span className="ml-1">{brand.style}</span>
        </motion.span>
      </TableCell>
      <TableCell>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={cn("px-2 py-1 rounded", getDropDateStyle(brand.dropDate))}
        >
          {format(new Date(brand.dropDate), 'MMMM d, yyyy')}
        </motion.div>
      </TableCell>
    </TableRow>
  );
};

export default BrandTableRow;
