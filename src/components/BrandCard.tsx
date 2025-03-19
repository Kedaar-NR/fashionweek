
import { Brand } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { styleConfig } from './BrandGallery';
import { ShoppingBag, Instagram, Bookmark, BookmarkCheck } from 'lucide-react';
import { format, formatDistanceToNow, isPast } from 'date-fns';
import { cn } from '@/lib/utils';
import BrandSidebar from './BrandSidebar';
import { useSavedBrands } from '@/context/SavedBrandsContext';
import { Button } from './ui/button';

interface BrandCardProps {
  brand: Brand;
  index: number;
}

export default function BrandCard({ brand, index }: BrandCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const styleData = styleConfig[brand.style];
  const dropDate = new Date(brand.dropDate);
  const isReleased = isPast(dropDate);
  const [open, setOpen] = useState(false);
  
  // Access saved brands state
  const { savedBrands, toggleSavedBrand } = useSavedBrands();
  const isSaved = !!savedBrands[brand.id];

  const handleSaveClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleSavedBrand(brand);
  };

  const cardAnimation = {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : 20,
    transition: {
      duration: 0.4,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    }
  };

  return (
    <>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={cardAnimation}
        className="flex flex-col rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
        onClick={() => setOpen(true)}
      >
        <div className="p-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              {brand.logoUrl ? (
                <img 
                  src={brand.logoUrl} 
                  alt={`${brand.name} logo`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <ShoppingBag className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg line-clamp-1">{brand.name}</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-7 w-7 rounded-full",
                    isSaved ? "text-primary" : "text-muted-foreground opacity-70 hover:opacity-100"
                  )}
                  onClick={handleSaveClick}
                  title={isSaved ? "Remove from saved" : "Save brand"}
                >
                  {isSaved ? (
                    <BookmarkCheck className="h-4 w-4" />
                  ) : (
                    <Bookmark className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <span 
                className="inline-flex items-center px-2 py-0.5 text-xs rounded-full font-medium capitalize mt-1"
                style={{ 
                  backgroundColor: `${styleData.color}20`, 
                  color: styleData.color 
                }}
              >
                {styleData.icon} <span className="ml-1">{brand.style}</span>
              </span>
            </div>
          </div>

          {brand.instagramHandle && (
            <a 
              href={`https://instagram.com/${brand.instagramHandle}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 bg-pink-50 text-pink-500 dark:bg-pink-900/30 dark:text-pink-300 rounded-lg hover:bg-pink-100 dark:hover:bg-pink-800/30 transition-colors"
              aria-label={`Visit ${brand.name}'s Instagram`}
            >
              <Instagram size={18} />
            </a>
          )}
        </div>

        <div className="mt-auto p-4 pt-0">
          <div className={cn(
            "text-sm font-medium",
            isReleased ? "text-gray-500" : "text-green-600 dark:text-green-400"
          )}>
            {isReleased ? 'Released ' : 'Dropping '}
            {isReleased
              ? formatDistanceToNow(dropDate, { addSuffix: true })
              : format(dropDate, 'MMMM d, yyyy')}
          </div>
          
          {brand.website && (
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-2 inline-flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Visit website
              <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <BrandSidebar 
            brand={brand} 
            open={open} 
            onClose={() => setOpen(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
