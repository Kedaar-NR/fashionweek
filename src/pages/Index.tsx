
import { useEffect } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FeedbackTab from '@/components/FeedbackTab';
import brands from '@/data/brands';
import { motion } from 'framer-motion';

const Index = () => {
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
        className="relative py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background z-0"></div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <div className="inline-block text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
                Discover New Brands
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Saturn Los Angeles
              <span className="block text-primary">Brand Gallery</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Explore our curated collection of innovative brands. Discover the latest drops, unique styles, and emerging designers shaping the future of fashion.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button 
                onClick={() => {
                  document.getElementById('brand-gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Explore Brands
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
      
      {/* Main Content */}
      <main className="container py-10 px-4" id="brand-gallery">
        <BrandGallery brands={brands} />
      </main>
      
      {/* Footer */}
      <footer className="bg-card py-10 mt-20">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">Saturn LA</h2>
              <p className="text-muted-foreground">Curating the future of fashion</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Saturn Los Angeles. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Feedback Tab */}
      <FeedbackTab />
    </div>
  );
};

export default Index;
