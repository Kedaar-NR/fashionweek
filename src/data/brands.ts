
import { Brand, BrandStyle } from '@/types';

// Helper function to generate random dates within a range
const randomDate = (start: Date, end: Date): string => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString();
};

// Placeholder image URLs - in a real app, these would be actual brand logos
const placeholderImages = [
  'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618354691438-25bc04584c23?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=400&h=400&fit=crop&q=80',
  'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=400&fit=crop&q=80',
];

// Brand name parts for generating random names
const brandPrefixes = ['Neo', 'Urban', 'Hyper', 'Edge', 'Lunar', 'Zen', 'Flux', 'Metro', 'Echo', 'Dusk', 'Axio', 'Vibe', 'Mono', 'Void', 'Apex'];
const brandSuffixes = ['Apparel', 'Collective', 'Studios', 'Attire', 'Wear', 'Threads', 'Denim', 'Gear', 'Garments', 'Couture', 'Avenue', 'District', 'Athletics'];

// Generate a random brand name
const generateBrandName = (): string => {
  const prefix = brandPrefixes[Math.floor(Math.random() * brandPrefixes.length)];
  const suffix = brandSuffixes[Math.floor(Math.random() * brandSuffixes.length)];
  return `${prefix} ${suffix}`;
};

// All possible brand styles
const brandStyles: BrandStyle[] = [
  'streetwear', 'goth', 'luxury', 'vintage', 'minimalist', 'contemporary', 'hypebeast', 'athletic', 'sustainable'
];

// Generate a single brand
const generateBrand = (id: number): Brand => {
  const style = brandStyles[Math.floor(Math.random() * brandStyles.length)];
  const name = generateBrandName();
  const instagramHandle = name.toLowerCase().replace(/\s+/g, '');
  const logoUrl = placeholderImages[id % placeholderImages.length];
  const featured = Math.random() > 0.85; // About 15% of brands are featured
  
  return {
    id: `brand-${id}`,
    name,
    style,
    logoUrl,
    instagramHandle,
    dropDate: randomDate(new Date(2022, 0, 1), new Date(2024, 11, 31)),
    featured,
    description: featured ? `${name} is a cutting-edge ${style} brand that's redefining fashion with bold designs and sustainable practices.` : undefined
  };
};

// Generate 100 brands
export const generateBrands = (count: number = 100): Brand[] => {
  return Array.from({ length: count }, (_, i) => generateBrand(i));
};

// Export the generated brands
const brands: Brand[] = generateBrands();
export default brands;
