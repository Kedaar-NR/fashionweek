
import { useLazyImage } from '@/utils/animations';
import { Brand } from '@/types';
import { cn } from '@/lib/utils';
import { CalendarIcon, InstagramIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface BrandCardProps {
  brand: Brand;
  index: number;
}

export const BrandCard = ({ brand, index }: BrandCardProps) => {
  const { isLoaded, currentSrc } = useLazyImage(brand.logoUrl);
  
  // Format the drop date
  const dropDate = new Date(brand.dropDate);
  const formattedDate = dropDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Instagram profile URL
  const instagramUrl = `https://instagram.com/${brand.instagramHandle}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="brand-card flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden">
        <div className={cn(
          "w-full h-full bg-muted flex items-center justify-center transition-opacity duration-500",
          isLoaded ? "opacity-0" : "opacity-100"
        )}>
          <div className="w-12 h-12 rounded-full bg-background/50 animate-pulse-soft" />
        </div>
        
        <img
          src={currentSrc}
          alt={`${brand.name} logo`}
          className={cn(
            "brand-image w-full h-full object-cover transition-all duration-500",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
        
        <div className="brand-overlay absolute inset-0 bg-background/10 backdrop-blur-sm opacity-0 transition-opacity duration-300 flex items-center justify-center">
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/90 text-black shadow-md hover:bg-white transition-colors duration-200"
            aria-label={`Visit ${brand.name} on Instagram`}
          >
            <InstagramIcon size={18} />
          </a>
        </div>
        
        {brand.featured && (
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-white/90 text-black font-medium animate-pulse-soft"
          >
            Featured
          </Badge>
        )}
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-medium text-lg leading-tight">
            <a 
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-all hover:text-primary"
            >
              {brand.name}
            </a>
          </h3>
        </div>
        
        <Badge variant="outline" className="w-fit mb-3 capitalize">
          {brand.style}
        </Badge>
        
        {brand.description && (
          <p className="text-sm text-muted-foreground mt-1 mb-3 flex-1">{brand.description}</p>
        )}
        
        <div className="flex items-center text-sm text-muted-foreground mt-auto">
          <CalendarIcon size={14} className="mr-1" />
          <span>Drop: {formattedDate}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandCard;
