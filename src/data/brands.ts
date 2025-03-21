import { Brand } from '@/types';
import { generateRealisticDate } from '@/utils/dateGenerators';
import { saturnLaBrands } from './brandsList';
import { placeholderImages, brandStyles } from './styleResources';

// Generate a single brand with realistic dates
const generateBrand = (id: number, brandData: { name: string, owner: boolean, instagramHandle?: string, dropDate?: string }, totalBrands: number): Brand => {
  const style = brandStyles[Math.floor(Math.random() * brandStyles.length)];
  const name = brandData.name;
  const instagramHandle = brandData.instagramHandle || name.toLowerCase().replace(/\s+|[^a-z0-9_]/g, '');
  const logoUrl = placeholderImages[id % placeholderImages.length];
  const featured = brandData.owner || Math.random() > 0.85; // Owners or about 15% of brands are featured

  // Use provided drop date or generate a realistic one
  const dropDate = brandData.dropDate || generateRealisticDate(id, totalBrands);

  return {
    id: `brand-${id}`,
    name,
    style,
    logoUrl,
    instagramHandle,
    dropDate,
    featured,
    description: featured ? `${name} is a cutting-edge ${style} brand that's redefining fashion with bold designs and sustainable practices.` : undefined
  };
};

// Generate brands from the provided list
export const generateBrands = (): Brand[] => {
  const totalBrands = saturnLaBrands.length;
  return saturnLaBrands.map((brandData, i) => generateBrand(i, brandData, totalBrands));
};

// Export the generated brands
const brands: Brand[] = generateBrands();
export default brands;
