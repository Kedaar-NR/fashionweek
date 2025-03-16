
import React from "react";
import { BrandStyle } from "@/types";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import StyleButton from "./StyleButton";

interface StyleFiltersProps {
  availableStyles: BrandStyle[];
  selectedStyles: BrandStyle[];
  styleLabels: Record<BrandStyle, string>;
  onToggleStyle: (style: BrandStyle) => void;
  onClearFilters: () => void;
  styleConfig?: Record<BrandStyle, { icon: JSX.Element; color: string }>;
  hasAnyFilter: boolean;
}

const StyleFilters = ({
  availableStyles,
  selectedStyles,
  styleLabels,
  onToggleStyle,
  onClearFilters,
  styleConfig,
  hasAnyFilter,
}: StyleFiltersProps) => {
  return (
    <div>
      <ScrollArea className="w-full">
        <div className="style-filters-scroll pr-4">
          {availableStyles.map((style) => {
            const styleData = styleConfig?.[style];
            return (
              <StyleButton
                key={style}
                style={style}
                isSelected={selectedStyles.includes(style)}
                onToggle={onToggleStyle}
                styleConfig={styleData}
                label={styleLabels[style]}
              />
            );
          })}
        </div>
      </ScrollArea>

      {hasAnyFilter && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          className="mt-2 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4 mr-1" />
          Clear
        </Button>
      )}
    </div>
  );
};

export default StyleFilters;
