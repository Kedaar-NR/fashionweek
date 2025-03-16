
import { BrandStyle } from "@/types";
import React from "react";

interface StyleButtonProps {
  style: BrandStyle;
  isSelected: boolean;
  onToggle: (style: BrandStyle) => void;
  styleConfig?: {
    icon: JSX.Element;
    color: string;
  };
  label: string;
}

const StyleButton = ({
  style,
  isSelected,
  onToggle,
  styleConfig,
  label,
}: StyleButtonProps) => {
  return (
    <button
      onClick={() => onToggle(style)}
      className={`filter-button flex items-center gap-1 ${isSelected ? "active" : ""}`}
      style={styleConfig && !isSelected ? { color: styleConfig.color } : {}}
    >
      {styleConfig?.icon} {label}
    </button>
  );
};

export default StyleButton;
