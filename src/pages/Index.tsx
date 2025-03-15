
import { useEffect, useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import FeedbackTab from '@/components/FeedbackTab';
import brands from '@/data/brands';
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import { X } from 'lucide-react';

const Index = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');
  const [showSubscribe, setShowSubscribe] = useState(true);
  
  useEffect(() => {
    // Add a smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Simplified */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-8 md:py-12 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto px-4"
          >
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-2 tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] animate-pulse-soft">
                FashionWeek
              </span>
            </motion.h1>
            
            <motion.p
              className="text-3xl font-bold text-primary mb-4 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Drop Tracker
            </motion.p>
            
            <motion.p
              className="text-md text-muted-foreground mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Track upcoming drops and discover emerging designers shaping the future of fashion.
            </motion.p>
            
            {/* Updated subscriber count with larger numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="w-full mt-2 mb-6"
            >
              <p className="text-lg text-primary font-medium">
                Join <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] to-[#F97316]">150,000+</span> fashion enthusiasts
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
      
      {/* Main Content */}
      <main className="container py-6 px-4" id="brand-gallery">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {viewMode === 'table' ? 'Upcoming Drops' : 'Brand Gallery'}
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setViewMode('table')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'table' 
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                Table View
              </button>
              <button 
                onClick={() => setViewMode('gallery')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'gallery' 
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                Gallery View
              </button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{brands.length}</span> brands
            </div>
          </div>
        </div>
        
        {viewMode === 'table' ? (
          <FashionWeekTable brands={brands} />
        ) : (
          <BrandGallery brands={brands} />
        )}
      </main>
      
      {/* Subscribe Form - Smaller in bottom right with close button */}
      {showSubscribe && (
        <div className="fixed bottom-24 right-6 z-40 bg-card/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border w-[300px] animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold">Subscribe to Updates</h3>
            <button 
              onClick={() => setShowSubscribe(false)} 
              className="p-1 rounded-full hover:bg-muted/80 transition-colors"
              aria-label="Close subscription form"
            >
              <X size={14} />
            </button>
          </div>
          <SubscribeForm formId="Q5fonbTT" height={220} />
        </div>
      )}
      
      {/* Footer */}
      <footer className="bg-card py-8 mt-20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">FashionWeek</h2>
              <p className="text-sm text-muted-foreground">Curating the future of fashion</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="border-t border-border mt-6 pt-6 text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} FashionWeek. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Smaller Chat-like Feedback Tab */}
      <FeedbackTab />
    </div>
  );
};

export default Index;
