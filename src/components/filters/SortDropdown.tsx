
import React from "react";
import { SortConfig } from "@/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";

interface SortDropdownProps {
  sortConfig: SortConfig;
  onSortChange: (newSort: SortConfig) => void;
}

const SortDropdown = ({ sortConfig, onSortChange }: SortDropdownProps) => {
  const getSortValue = () => `${sortConfig.field}-${sortConfig.direction}`;

  const handleSortChange = (value: string) => {
    const [field, direction] = value.split("-") as [any, any];
    onSortChange({ field, direction });
  };

  return (
    <Select value={getSortValue()} onValueChange={handleSortChange}>
      <SelectTrigger className="w-[160px] h-9">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="dropDate-desc">
          <div className="flex items-center">
            <span>Newest First</span>
            <ArrowDownIcon className="ml-2 h-3 w-3" />
          </div>
        </SelectItem>
        <SelectItem value="dropDate-asc">
          <div className="flex items-center">
            <span>Oldest First</span>
            <ArrowUpIcon className="ml-2 h-3 w-3" />
          </div>
        </SelectItem>
        <SelectItem value="name-asc">
          <div className="flex items-center">
            <span>Name (A-Z)</span>
            <ArrowUpIcon className="ml-2 h-3 w-3" />
          </div>
        </SelectItem>
        <SelectItem value="name-desc">
          <div className="flex items-center">
            <span>Name (Z-A)</span>
            <ArrowDownIcon className="ml-2 h-3 w-3" />
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SortDropdown;
