import { Brand } from '@/types';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { styleConfig } from './BrandGallery';
import { ShoppingBag, Instagram, Bookmark, BookmarkCheck, Image } from 'lucide-react';
import { format, formatDistanceToNow, isPast } from 'date-fns';
import { cn } from '@/lib/utils';
import BrandSidebar from './BrandSidebar';
import { useSavedBrands } from '@/context/SavedBrandsContext';
import { Button } from './ui/button';
import { Skeleton } from './ui/skeleton';

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
  const today = new Date();
  const isLive = dropDate.getDate() === today.getDate() && 
                 dropDate.getMonth() === today.getMonth() && 
                 dropDate.getFullYear() === today.getFullYear();
  
  // Calculate date differences
  const oneWeekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
  const oneMonthFromNow = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  
  // Determine date color based on proximity
  const getDateColor = () => {
    if (isLive) return "text-red-500 font-bold";
    if (dropDate <= oneWeekFromNow) return "text-pink-500 font-medium";
    if (dropDate <= oneMonthFromNow) return "text-yellow-500";
    return "text-green-500";
  };

  const [open, setOpen] = useState(false);
  const [instagramPreview, setInstagramPreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  // Access saved brands state
  const { savedBrands, toggleSavedBrand } = useSavedBrands();
  const isSaved = !!savedBrands[brand.id];

  // Fetch Instagram preview if handle exists
  useEffect(() => {
    if (brand.instagramHandle) {
      setIsLoading(true);
      
      // Clean the handle (remove @ if present)
      const cleanHandle = brand.instagramHandle.startsWith('@') 
        ? brand.instagramHandle.substring(1) 
        : brand.instagramHandle;
        
      // We'll use the embed preview
      const embedUrl = `https://www.instagram.com/${cleanHandle}/embed`;
      setInstagramPreview(embedUrl);
      setIsLoading(false);
    }
  }, [brand.instagramHandle]);

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

  const getInstagramUrl = (handle: string) => {
    // Remove @ if present
    const cleanHandle = handle.startsWith('@') ? handle.substring(1) : handle;
    return `https://instagram.com/${cleanHandle}`;
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
              href={getInstagramUrl(brand.instagramHandle)}
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

        {/* Instagram Preview - increased height */}
        {brand.instagramHandle && (
          <div className="w-full h-60 bg-gray-100 dark:bg-gray-700 overflow-hidden relative">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <Skeleton className="w-full h-full" />
              </div>
            ) : instagramPreview ? (
              <iframe
                src={instagramPreview}
                className="w-full h-[500px] -mt-32 pointer-events-none"
                title={`${brand.name} Instagram`}
                frameBorder="0"
                scrolling="no"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <Image size={32} className="text-gray-400 mb-2" />
                <p className="text-sm text-gray-500">Instagram preview not available</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-auto p-4">
          <div className={cn(
            "text-sm font-medium",
            getDateColor()
          )}>
            {isLive ? (
              <span className="text-red-500 font-bold">LIVE NOW</span>
            ) : (
              format(dropDate, 'MMM d, yyyy')
            )}
          </div>
          
          {isReleased && (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">
                  ({formatDistanceToNow(dropDate, { addSuffix: true })})
                </span>
              </div>
            </div>
          )}
          
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
