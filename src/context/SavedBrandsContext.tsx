
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Brand } from '@/types';
import { useAuth } from './AuthContext';
import { toast } from '@/hooks/use-toast';

interface SavedBrandsContextType {
  savedBrands: Record<string, boolean>;
  toggleSavedBrand: (brand: Brand) => void;
  getSavedBrandsList: () => Brand[];
}

const SavedBrandsContext = createContext<SavedBrandsContextType | undefined>(undefined);

export const SavedBrandsProvider = ({ children, brands }: { children: ReactNode; brands: Brand[] }) => {
  const { user } = useAuth();
  const [savedBrands, setSavedBrands] = useState<Record<string, boolean>>({});

  // Load saved brands from localStorage on mount and when user changes
  useEffect(() => {
    if (user) {
      const storedBrands = localStorage.getItem(`saved-brands-${user.id}`);
      if (storedBrands) {
        setSavedBrands(JSON.parse(storedBrands));
      }
    } else {
      setSavedBrands({});
    }
  }, [user]);

  // Save to localStorage whenever savedBrands changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`saved-brands-${user.id}`, JSON.stringify(savedBrands));
    }
  }, [savedBrands, user]);

  const toggleSavedBrand = (brand: Brand) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to save brands",
        variant: "destructive"
      });
      return;
    }

    setSavedBrands(prev => {
      const isSaved = !prev[brand.id];
      
      // Show toast based on action
      toast({
        title: isSaved ? "Brand saved" : "Brand removed",
        description: isSaved ? `${brand.name} added to your saved brands` : `${brand.name} removed from your saved brands`
      });
      
      return {
        ...prev,
        [brand.id]: isSaved
      };
    });
  };

  const getSavedBrandsList = (): Brand[] => {
    if (!user) return [];
    
    return brands.filter(brand => savedBrands[brand.id]);
  };

  return (
    <SavedBrandsContext.Provider value={{ savedBrands, toggleSavedBrand, getSavedBrandsList }}>
      {children}
    </SavedBrandsContext.Provider>
  );
};

export const useSavedBrands = () => {
  const context = useContext(SavedBrandsContext);
  if (context === undefined) {
    throw new Error('useSavedBrands must be used within a SavedBrandsProvider');
  }
  return context;
};
