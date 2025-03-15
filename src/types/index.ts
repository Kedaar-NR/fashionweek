
// Available Brand Styles
export type BrandStyle = 
  | 'streetwear' 
  | 'luxury' 
  | 'goth' 
  | 'vintage' 
  | 'minimalist' 
  | 'contemporary' 
  | 'hypebeast' 
  | 'athletic' 
  | 'sustainable';

// Brand Data Type
export interface Brand {
  id: string;
  name: string;
  logoUrl?: string; 
  instagramHandle: string;
  instagramImageUrl?: string; // Added Instagram image URL
  style: BrandStyle;
  dropDate: string; // Format: "2023-09-15"
  featured?: boolean;
}

// Sort Configuration
export interface SortConfig {
  field: keyof Pick<Brand, 'name' | 'style' | 'dropDate'>;
  direction: 'asc' | 'desc';
}

// Filter Configuration
export interface FilterConfig {
  styles: BrandStyle[];
  searchTerm: string;
}
