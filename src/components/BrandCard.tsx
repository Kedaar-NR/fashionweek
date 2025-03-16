
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
      className="bg-white rounded-lg overflow-hidden border border-[#eaeaea] hover:border-[#ddd] hover:shadow-sm transition-all group"
    >
      <div 
        className="relative h-48 overflow-hidden"
        style={{ 
          backgroundColor: `${styleData.color}30`
        }}
      >
        <div 
          className="absolute bottom-0 right-0 m-2 px-2.5 py-1 rounded-full text-xs font-medium capitalize"
          style={{ 
            backgroundColor: `${styleData.color}15`, 
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
            className="text-base font-medium hover:text-[#f97316] transition-colors hover:underline"
          >
            {brand.name}
          </a>
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ 
              backgroundColor: `${styleData.color}30`, 
              color: styleData.color
            }}
          >
            {brand.name.charAt(0)}
          </div>
        </div>
        
        <div className="mt-2">
          <div className="text-sm text-[#777]">Drop date:</div>
          <div className="font-medium text-[#111]">
            {format(new Date(brand.dropDate), 'MMMM d, yyyy')}
          </div>
        </div>
        
        <div className="mt-4 text-sm">
          <a 
            href={`https://instagram.com/${brand.instagramHandle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#777] hover:text-[#f97316] transition-colors"
          >
            @{brand.instagramHandle}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BrandCard;
