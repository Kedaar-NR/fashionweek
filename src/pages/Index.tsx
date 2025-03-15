
import { useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import brands from '@/data/brands';
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import FeedbackTab from '@/components/FeedbackTab';
import { Shirt, TrendingUp, Sparkles, Calendar } from 'lucide-react';

const Index = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');
  const [showSubscribe, setShowSubscribe] = useState(true);
  
  const handleSubscribeComplete = () => {
    setShowSubscribe(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Creative Header with decorative elements */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-12 md:py-16 overflow-hidden border-b border-[#eaeaea] bg-gradient-to-b from-[#ffffff] to-[#fafafa]"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#F97316]/5"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute top-20 -left-20 w-48 h-48 rounded-full bg-[#8B5CF6]/5"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          {/* Floating fashion icons */}
          <motion.div 
            className="absolute top-10 right-[15%] text-[#F97316]/20"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Shirt size={32} />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-[20%] text-[#8B5CF6]/20"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            <Calendar size={28} />
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 right-[30%] text-[#10B981]/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          >
            <TrendingUp size={24} />
          </motion.div>
        </div>

        <div className="container relative z-10">
          <div className="flex justify-between items-center mb-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2 className="text-2xl font-medium text-[#111] flex items-center">
                <span className="text-[#F97316] mr-2">Fashion</span>Week
                <motion.span 
                  className="ml-2 text-[#F97316]"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Sparkles size={20} />
                </motion.span>
              </h2>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-sm">
                info@fashionweek.com
              </div>
              <div className="text-sm">©2025 • <span className="text-[#F97316] font-medium">Join 150,000 readers</span></div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Discover What's Next in <span className="text-[#F97316]">Fashion</span>
            </motion.h1>
            
            <motion.p
              className="text-lg text-[#555] md:text-xl max-w-xl mt-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Track upcoming drops and discover emerging designers shaping the future of fashion.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="py-2 px-4 bg-[#F97316]/10 rounded-full text-sm text-[#F97316] font-medium"
            >
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" />
                {brands.length} brands with upcoming drops
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
      
      {/* Main Content */}
      <main className="container py-12 px-4" id="brand-gallery">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-medium text-[#111]">
            {viewMode === 'table' ? 'Upcoming Drops' : 'Brand Gallery'}
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setViewMode('table')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'table' 
                    ? 'bg-[#F97316] text-white hover:bg-[#F97316]/90'
                    : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
                }`}
              >
                Table View
              </button>
              <button 
                onClick={() => setViewMode('gallery')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'gallery' 
                    ? 'bg-[#F97316] text-white hover:bg-[#F97316]/90'
                    : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
                }`}
              >
                Gallery View
              </button>
            </div>
            
            <div className="text-sm text-[#777]">
              <span className="font-medium text-[#111]">{brands.length}</span> brands
            </div>
          </div>
        </div>
        
        {viewMode === 'table' ? (
          <FashionWeekTable brands={brands} />
        ) : (
          <BrandGallery brands={brands} />
        )}
      </main>
      
      {/* Subscribe Form - Conditionally displayed */}
      {showSubscribe && (
        <div className="fixed bottom-24 right-6 z-40 bg-white shadow-lg border border-[#eaeaea] p-3 rounded-lg w-[320px] animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-medium">Subscribe to Updates</h3>
            <button 
              onClick={() => setShowSubscribe(false)} 
              className="p-1 rounded-full hover:bg-[#f5f5f5] transition-colors"
              aria-label="Close subscription form"
            >
              <motion.span whileHover={{ rotate: 90 }} transition={{ duration: 0.2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.span>
            </button>
          </div>
          <SubscribeForm formId="Q5fonbTT" height={350} onComplete={handleSubscribeComplete} />
        </div>
      )}
      
      {/* Footer */}
      <footer className="bg-white py-8 mt-20 border-t border-[#eaeaea]">
        <div className="container px-4">
          <div className="grid grid-cols-6 gap-8">
            <div className="col-span-6 md:col-span-2">
              <h2 className="text-xl font-medium">FashionWeek</h2>
              <p className="text-sm text-[#777] mt-1">Curating the future of fashion</p>
            </div>
            
            <div className="col-span-6 md:col-span-4 flex justify-between flex-wrap gap-8">
              <div>
                <h3 className="text-sm font-medium mb-3">Partners</h3>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">RotaShow</a>
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">Waves</a>
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">Travelers</a>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Legal</h3>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">Privacy</a>
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">Terms</a>
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#eaeaea] mt-8 pt-8 text-center text-xs text-[#777]">
            &copy; 2025 FashionWeek. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Add the Feedback Tab component */}
      <FeedbackTab />
    </div>
  );
};

export default Index;
