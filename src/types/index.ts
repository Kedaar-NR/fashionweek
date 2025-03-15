
export interface Brand {
  id: string;
  name: string;
  style: BrandStyle;
  logoUrl: string;
  instagramHandle: string;
  dropDate: string; // ISO date string
  featured: boolean;
  description?: string;
}

export type BrandStyle = 
  | 'streetwear' 
  | 'goth' 
  | 'luxury' 
  | 'vintage' 
  | 'minimalist' 
  | 'contemporary' 
  | 'hypebeast' 
  | 'athletic' 
  | 'sustainable';

export type SortField = 'name' | 'dropDate';
export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: SortField;
  direction: SortDirection;
}

export interface FilterConfig {
  styles: BrandStyle[];
  searchTerm: string;
}
