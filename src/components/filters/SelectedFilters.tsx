
import React from "react";
import { BrandStyle } from "@/types";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface SelectedFiltersProps {
  selectedStyles: BrandStyle[];
  onToggleStyle: (style: BrandStyle) => void;
  styleConfig?: Record<BrandStyle, { icon: JSX.Element; color: string }>;
}

const SelectedFilters = ({
  selectedStyles,
  onToggleStyle,
  styleConfig,
}: SelectedFiltersProps) => {
  if (selectedStyles.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {selectedStyles.map((style) => {
        const styleData = styleConfig?.[style];
        return (
          <Badge
            key={style}
            variant="secondary"
            className="capitalize flex items-center gap-1"
            style={
              styleData
                ? { backgroundColor: `${styleData.color}20`, color: styleData.color }
                : {}
            }
          >
            {styleData?.icon} {style}
            <X
              className="h-3 w-3 ml-1 cursor-pointer"
              onClick={() => onToggleStyle(style)}
            />
          </Badge>
        );
      })}
    </div>
  );
};

export default SelectedFilters;
