
import { useEffect, useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import FeedbackTab from '@/components/FeedbackTab';
import brands from '@/data/brands';
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import { X } from 'lucide-react';

const Index = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('gallery');
  const [showSubscribe, setShowSubscribe] = useState(true);

  useEffect(() => {
    // Add a smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleSubscribeComplete = () => {
    setShowSubscribe(false);
  };

  return <div className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Enhanced Hero Section with creative design */}
      <motion.header 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative py-10 md:py-16 overflow-hidden border-b border-[#eaeaea] bg-gradient-to-b from-white to-[#f9f9f9]"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f97316] via-[#f43f5e] to-[#a855f7]"></div>
        
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-[#fef9c3] to-[#fef08a] opacity-20 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-[#fbcfe8] to-[#f9a8d4] opacity-20 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-medium text-[#111]">FashionWeek</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm">
                info@fashionweek.com
              </div>
              
              <div className="flex gap-3">
                <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#eaeaea] hover:bg-[#f5f5f5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#eaeaea] hover:bg-[#f5f5f5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center rounded-full border border-[#eaeaea] hover:bg-[#f5f5f5]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <path d="m10 15 5-3-5-3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col items-start max-w-5xl mx-auto"
          >
            <div className="flex flex-col md:flex-row md:justify-between w-full items-center md:items-end gap-8 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="md:max-w-xl"
              >
                <p className="text-xl text-[#555] mb-4 md:mb-0 text-center md:text-left">
                  Track upcoming drops and discover emerging designers shaping the future of fashion.
                </p>
              </motion.div>
              
              <div className="text-center md:text-right relative">
                <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#f97316] to-[#f43f5e] opacity-10 blur-xl"></div>
                <div className="text-xs text-[#777] uppercase">// JOIN</div>
                <div className="text-5xl font-bold bg-gradient-to-r from-[#f97316] to-[#f43f5e] bg-clip-text text-transparent">320K</div>
                <div className="text-xs text-[#555] uppercase">CHANGEMAKERS</div>
              </div>
            </div>
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
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${viewMode === 'table' ? 'bg-[#f43f5e] text-white hover:bg-[#e11d48]' : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'}`}
              >
                Table View
              </button>
              <button 
                onClick={() => setViewMode('gallery')} 
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${viewMode === 'gallery' ? 'bg-[#f43f5e] text-white hover:bg-[#e11d48]' : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'}`}
              >
                Gallery View
              </button>
            </div>
            
            <div className="text-sm text-[#777]">
              <span className="font-medium text-[#111]">{brands.length}</span> brands
            </div>
          </div>
        </div>
        
        {viewMode === 'table' ? <FashionWeekTable brands={brands} /> : <BrandGallery brands={brands} />}
      </main>
      
      {/* Subscribe Form - Taller with adjusted height */}
      {showSubscribe && <div className="fixed bottom-24 right-6 z-40 bg-white shadow-lg border border-[#eaeaea] p-3 rounded-lg w-[280px] animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-medium">Subscribe to Updates</h3>
            <button onClick={() => setShowSubscribe(false)} className="p-1 rounded-full hover:bg-[#f5f5f5] transition-colors" aria-label="Close subscription form">
              <X size={12} />
            </button>
          </div>
          <SubscribeForm formId="Q5fonbTT" height={280} onComplete={handleSubscribeComplete} />
        </div>}
      
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
                <h3 className="text-sm font-medium mb-3">Social</h3>
                <div className="flex flex-col gap-2">
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">Instagram</a>
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">Twitter</a>
                  <a href="#" className="text-sm text-[#555] hover:text-black transition-colors">YouTube</a>
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
            &copy; {new Date().getFullYear()} FashionWeek. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Feedback Tab with blurb */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="absolute -top-8 right-0 bg-white px-3 py-2 rounded-full text-xs shadow-sm border border-[#eaeaea] whitespace-nowrap">
          Give feedback
        </div>
        <button 
          className="bg-[#111] text-white rounded-full p-3 shadow-lg hover:bg-black transition-colors text-xs flex items-center justify-center w-10 h-10" 
          onClick={() => window.open('https://form.typeform.com/to/Y5r3mjhF', '_blank')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>
    </div>;
};

export default Index;
