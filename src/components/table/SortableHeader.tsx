
import { SortField, SortDirection, SortConfig } from '@/types';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { TableHead } from '@/components/ui/table';

interface SortableHeaderProps {
  label: string;
  field: SortField;
  sortConfig: SortConfig;
  onSort: (field: SortField) => void;
  className?: string;
  children?: React.ReactNode;
}

const SortableHeader = ({
  label,
  field,
  sortConfig,
  onSort,
  className,
  children
}: SortableHeaderProps) => {
  const isSorted = sortConfig.field === field;
  const sortDirection = sortConfig.direction;

  return (
    <TableHead
      className={`cursor-pointer hover:bg-muted/30 transition-colors ${className || ''}`}
      onClick={() => onSort(field)}
    >
      <div className="flex items-center gap-2">
        <span>{label}</span>
        {isSorted && (
          sortDirection === 'asc' 
            ? <ArrowUp size={14} /> 
            : <ArrowDown size={14} />
        )}
        {children}
      </div>
    </TableHead>
  );
};

export default SortableHeader;
