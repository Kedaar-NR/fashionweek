
import { useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import brands from '@/data/brands';
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';

const Index = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');
  const [showSubscribe, setShowSubscribe] = useState(true);
  
  const handleSubscribeComplete = () => {
    setShowSubscribe(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Simplified Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-6 md:py-8 overflow-hidden border-b border-[#eaeaea]"
      >
        <div className="container relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-medium text-[#111]">FashionWeek</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm">
                info@fashionweek.com
              </div>
              <div className="text-sm">©2025 • Join 150,000 readers</div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-start max-w-5xl mx-auto"
          >
            <motion.p
              className="text-md text-[#555] max-w-xl mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Track upcoming drops and discover emerging designers shaping the future of fashion.
            </motion.p>
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
                    ? 'bg-[#111] text-white hover:bg-black'
                    : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'
                }`}
              >
                Table View
              </button>
              <button 
                onClick={() => setViewMode('gallery')}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  viewMode === 'gallery' 
                    ? 'bg-[#111] text-white hover:bg-black'
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
          <SubscribeForm formId="Q5fonbTT" height={320} onComplete={handleSubscribeComplete} />
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
      
      {/* More prominent feedback button */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="relative">
          <button 
            className="bg-[#111] text-white rounded-full p-4 shadow-lg hover:bg-black transition-colors flex items-center justify-center w-14 h-14"
            onClick={() => window.open('https://forms.gle/feedback', '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          
          {/* Added feedback label */}
          <div className="absolute -top-8 right-0 bg-white text-[#111] px-3 py-1 rounded-lg shadow-lg z-40 text-xs whitespace-nowrap">
            Give us feedback!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
