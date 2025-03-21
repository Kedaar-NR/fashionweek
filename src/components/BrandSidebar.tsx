
import { Brand } from '@/types';
import { X, ExternalLink, Instagram } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

interface BrandSidebarProps {
  brand: Brand | null;
  open: boolean;
  onClose: () => void;
}

const BrandSidebar = ({ brand, open, onClose }: BrandSidebarProps) => {
  const [instagramUrl, setInstagramUrl] = useState<string>('');

  useEffect(() => {
    if (brand?.instagramHandle) {
      setInstagramUrl(`https://www.instagram.com/${brand.instagramHandle}/embed`);
    }
  }, [brand]);

  if (!brand) return null;

  const getProperInstagramUrl = (handle: string) => {
    // Remove @ if present
    const cleanHandle = handle.startsWith('@') ? handle.substring(1) : handle;
    return `https://instagram.com/${cleanHandle}`;
  };

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-md md:max-w-lg overflow-auto">
        <SheetHeader className="mb-6">
          <div className="flex justify-between items-center">
            <SheetTitle className="text-xl flex items-center gap-2">
              {brand.logoUrl && (
                <img 
                  src={brand.logoUrl} 
                  alt={`${brand.name} logo`} 
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              {brand.name}
            </SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </SheetClose>
          </div>
          
          <div className="flex mt-4 space-x-2">
            {brand.website && (
              <a 
                href={brand.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
              >
                <ExternalLink size={14} />
                Visit Website
              </a>
            )}
            
            {brand.instagramHandle && (
              <a 
                href={getProperInstagramUrl(brand.instagramHandle)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-pink-700 hover:bg-pink-100 transition-colors"
              >
                <Instagram size={14} />
                @{brand.instagramHandle.replace('@', '')}
              </a>
            )}
          </div>
        </SheetHeader>
        
        {brand.instagramHandle && (
          <div className="instagram-embed-container">
            <iframe
              src={instagramUrl}
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="no"
              title={`${brand.name} Instagram`}
              className="rounded-md border border-border"
            ></iframe>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default BrandSidebar;
