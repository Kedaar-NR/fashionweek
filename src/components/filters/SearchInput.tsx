
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface SearchInputProps {
  initialValue: string;
  onSearch: (value: string) => void;
}

const SearchInput = ({ initialValue, onSearch }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="relative">
      <SearchIcon className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search brands..."
        className="pl-9 w-full md:w-[200px] h-9"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default SearchInput;
