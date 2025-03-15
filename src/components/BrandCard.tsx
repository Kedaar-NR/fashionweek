
import { Brand } from '@/types';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { styleConfig } from './BrandGallery';
import { 
  ShoppingBag, 
  Crown, 
  Shirt, 
  Clock, 
  Scissors, 
  Palette, 
  Flame, 
  Dumbbell, 
  Leaf,
  Store
} from 'lucide-react';

interface BrandCardProps {
  brand: Brand;
  index: number;
}

const BrandCard = ({ brand, index }: BrandCardProps) => {
  const styleData = styleConfig[brand.style];
  
  // Brand icon generation based on style
  const getBrandIcon = () => {
    const size = 48;
    const color = styleData.color;
    
    switch(brand.style) {
      case 'streetwear': return <ShoppingBag size={size} color={color} />;
      case 'goth': return <Scissors size={size} color={color} />;
      case 'luxury': return <Crown size={size} color={color} />;
      case 'vintage': return <Clock size={size} color={color} />;
      case 'minimalist': return <Shirt size={size} color={color} />;
      case 'contemporary': return <Palette size={size} color={color} />;
      case 'hypebeast': return <Flame size={size} color={color} />;
      case 'athletic': return <Dumbbell size={size} color={color} />;
      case 'sustainable': return <Leaf size={size} color={color} />;
      default: return <Store size={size} color={color} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="bg-white rounded-lg overflow-hidden border border-[#eaeaea] hover:border-[#ddd] hover:shadow-sm transition-all group"
    >
      <div 
        className="relative h-48 overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: styleData.bgColor }}
      >
        {getBrandIcon()}
        
        <div 
          className="absolute bottom-0 right-0 m-2 px-2.5 py-1 rounded-full text-xs font-medium capitalize flex items-center gap-1"
          style={{ 
            backgroundColor: `${styleData.color}20`, 
            color: styleData.color
          }}
        >
          {styleData.icon} {brand.style}
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
            className="w-8 h-8 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: styleData.color }}
          >
            {brand.name.charAt(0).toUpperCase()}
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
