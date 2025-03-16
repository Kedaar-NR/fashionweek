
import { SortField, SortDirection, SortConfig } from '@/types';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { TableHead } from '@/components/ui/table';
import { motion } from 'framer-motion';
import { memo } from 'react';

interface SortableHeaderProps {
  label: string;
  field: SortField;
  sortConfig: SortConfig;
  onSort: (field: SortField) => void;
  className?: string;
  children?: React.ReactNode;
}

const SortableHeader = memo(({
  label,
  field,
  sortConfig,
  onSort,
  className,
  children
}: SortableHeaderProps) => {
  const isSorted = sortConfig.field === field;
  const sortDirection = sortConfig.direction;

  const handleClick = () => {
    onSort(field);
  };

  return (
    <TableHead
      className={`cursor-pointer hover:bg-muted/30 transition-colors ${className || ''}`}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2">
        <span className="font-medium">{label}</span>
        {isSorted && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: sortDirection === 'asc' ? 0 : 180 }}
            transition={{ duration: 0.3 }}
            className="text-primary"
          >
            <ArrowUp size={14} />
          </motion.div>
        )}
        {children}
      </div>
    </TableHead>
  );
});

export default SortableHeader;
