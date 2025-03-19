
import { useState } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSavedBrands } from '@/context/SavedBrandsContext';
import { Brand } from '@/types';
import BrandSidebar from './BrandSidebar';

interface SavedBrandsDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function SavedBrandsDrawer({ open, onClose }: SavedBrandsDrawerProps) {
  const { getSavedBrandsList } = useSavedBrands();
  const savedBrands = getSavedBrandsList();
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const handleBrandClick = (brand: Brand) => {
    setSelectedBrand(brand);
    setSidebarOpen(true);
  };

  return (
    <Drawer open={open} onOpenChange={onClose}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader>
          <DrawerTitle className="text-xl">Your Saved Brands</DrawerTitle>
        </DrawerHeader>
        <div className="p-4">
          {savedBrands.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <h3 className="text-lg font-medium mb-2">No saved brands yet</h3>
              <p className="text-muted-foreground mb-4">
                Start saving brands by clicking the bookmark icon next to brand names
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {savedBrands.map(brand => (
                <div 
                  key={brand.id}
                  className="flex flex-col items-center p-4 bg-background border rounded-md cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => handleBrandClick(brand)}
                >
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted mb-2">
                    {brand.logoUrl ? (
                      <img 
                        src={brand.logoUrl} 
                        alt={`${brand.name} logo`} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-xl font-bold">
                        {brand.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-center">{brand.name}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </DrawerContent>

      <BrandSidebar 
        brand={selectedBrand} 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
    </Drawer>
  );
}
