
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

interface TableSearchProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

const TableSearch = ({ searchTerm, onSearch }: TableSearchProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search brands..."
        className="pl-9 w-[180px] h-8"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default TableSearch;
