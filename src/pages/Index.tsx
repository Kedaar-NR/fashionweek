
import { useEffect } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import FeedbackTab from '@/components/FeedbackTab';
import brands from '@/data/brands';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SubscribeForm from '@/components/SubscribeForm';

const Index = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');
  
  useEffect(() => {
    // Add a smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-12 md:py-20 overflow-hidden"
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
              className="text-7xl md:text-9xl font-bold mb-2 tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#F97316] animate-pulse-soft">
                FashionWeek
              </span>
            </motion.h1>
            
            <motion.p
              className="text-4xl font-bold text-primary mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Drop Tracker
            </motion.p>
            
            <motion.p
              className="text-lg text-muted-foreground mb-6 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Explore our curated collection of innovative brands. Track upcoming drops and discover emerging designers shaping the future of fashion.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4 mb-6"
            >
              <button 
                onClick={() => setViewMode('table')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  viewMode === 'table' 
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                Table View
              </button>
              <button 
                onClick={() => setViewMode('gallery')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  viewMode === 'gallery' 
                    ? 'bg-primary text-white hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                Gallery View
              </button>
            </motion.div>
            
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
      <main className="container py-10 px-4" id="brand-gallery">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            {viewMode === 'table' ? 'Upcoming Drops' : 'Brand Gallery'}
          </h2>
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{brands.length}</span> brands tracked
          </div>
        </div>
        
        {viewMode === 'table' ? (
          <FashionWeekTable brands={brands} />
        ) : (
          <BrandGallery brands={brands} />
        )}
      </main>
      
      {/* Subscribe Form - Now in a fixed position at the bottom right */}
      <div className="fixed bottom-28 right-6 z-40 bg-card/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border w-[350px] animate-fade-in">
        <h3 className="text-lg font-semibold mb-4">Subscribe to Updates</h3>
        <SubscribeForm formId="Q5fonbTT" height={280} />
      </div>
      
      {/* Footer */}
      <footer className="bg-card py-10 mt-20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">FashionWeek</h2>
              <p className="text-muted-foreground">Curating the future of fashion</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} FashionWeek. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Chat-like Feedback Tab */}
      <FeedbackTab />
    </div>
  );
};

export default Index;
