
import { Brand } from '@/types';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { styleConfig } from './BrandGallery';

interface BrandCardProps {
  brand: Brand;
  index: number;
}

const BrandCard = ({ brand, index }: BrandCardProps) => {
  const styleData = styleConfig[brand.style];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/20 hover:shadow-md transition-all group"
    >
      <div className="relative h-48 overflow-hidden">
        {brand.logoUrl ? (
          <img 
            src={brand.logoUrl} 
            alt={brand.name} 
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted/50">
            <img 
              src="/placeholder.svg" 
              alt="Placeholder" 
              className="w-16 h-16 text-muted-foreground opacity-50 transition-all duration-300 group-hover:scale-110" 
            />
          </div>
        )}
        <div 
          className="absolute bottom-0 right-0 m-2 px-2.5 py-1 rounded-full text-xs font-medium capitalize"
          style={{ 
            backgroundColor: `${styleData.color}20`, 
            color: styleData.color
          }}
        >
          <div className="flex items-center gap-1">
            {styleData.icon} {brand.style}
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <a 
            href={`https://instagram.com/${brand.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium hover:text-primary transition-colors hover:underline"
          >
            {brand.name}
          </a>
          {brand.logoUrl ? (
            <div className="w-8 h-8 rounded-full overflow-hidden border border-border">
              <img 
                src={brand.logoUrl} 
                alt={`${brand.name} logo`} 
                className="w-full h-full object-cover" 
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              {brand.name.charAt(0)}
            </div>
          )}
        </div>
        
        <div className="mt-2">
          <div className="text-sm text-muted-foreground">Drop date:</div>
          <div className="font-semibold">
            {format(new Date(brand.dropDate), 'MMMM d, yyyy')}
          </div>
        </div>
        
        <div className="mt-4 text-sm">
          <a 
            href={`https://instagram.com/${brand.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            @{brand.instagramHandle}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandCard;
