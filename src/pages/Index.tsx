
import { useEffect, useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import brands from '@/data/brands';
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import FeedbackForm from '@/components/FeedbackForm';
import { X } from 'lucide-react';

const Index = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

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
      {/* Hero Section - Updated design */}
      <motion.header initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} className="relative py-6 md:py-8 overflow-hidden border-b border-[#eaeaea]">
        <div className="container relative z-10">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-medium text-[#111]">FashionWeek</h2>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm">
                info@fashionweek.com
              </div>
            </div>
          </div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2,
          duration: 0.5
        }} className="flex flex-col items-start max-w-5xl mx-auto">
            <motion.p className="text-md bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#D946EF] font-medium max-w-xl mt-4" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4,
            duration: 0.5
          }}>
              Track upcoming drops and discover emerging designers shaping the future of fashion.
            </motion.p>
            
            <div className="flex justify-between w-full items-end mt-12">
              <div className="max-w-xs">
                <div className="text-lg font-light text-[#777] italic">©2025 Join 150,000 readers</div>
              </div>
              
              <div className="text-right">
                <div className="text-xs text-[#777] uppercase">// JOIN</div>
                <div className="text-5xl font-bold text-[#111]">320K</div>
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
              <button onClick={() => setViewMode('table')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${viewMode === 'table' ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'}`}>
                Table View
              </button>
              <button onClick={() => setViewMode('gallery')} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${viewMode === 'gallery' ? 'bg-pink-500 text-white hover:bg-pink-600' : 'bg-[#f5f5f5] text-[#333] hover:bg-[#eaeaea]'}`}>
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
      
      {/* Subscribe Form - Smaller in bottom right with close button */}
      {showSubscribe && <div className="fixed bottom-24 right-6 z-40 bg-white shadow-lg border border-[#eaeaea] p-3 rounded-lg w-[300px] animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xs font-medium">Subscribe to Updates</h3>
            <button onClick={() => setShowSubscribe(false)} className="p-1 rounded-full hover:bg-[#f5f5f5] transition-colors" aria-label="Close subscription form">
              <X size={12} />
            </button>
          </div>
          <SubscribeForm formId="Q5fonbTT" height={220} onComplete={handleSubscribeComplete} />
        </div>}
      
      {/* Feedback Form */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setShowFeedback(false)} 
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#f5f5f5] z-10"
            >
              <X size={20} />
            </button>
            <FeedbackForm formId="Y5r3mjhF" />
          </div>
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
                <h3 className="text-sm font-medium mb-3">Social</h3>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[#555]">Coming soon</span>
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
      
      {/* Feedback Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button 
          className="bg-pink-500 text-white rounded-full p-3 shadow-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 pl-4 pr-4"
          onClick={() => setShowFeedback(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="text-sm whitespace-nowrap">Give us feedback!</span>
        </button>
      </div>
    </div>;
};

export default Index;
