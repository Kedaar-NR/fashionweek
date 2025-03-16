
import { useState, useEffect } from 'react';
import { MessageSquareText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';

export const FeedbackTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close on escape key
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen]);
  
  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50 hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        aria-label="Open feedback form"
      >
        <span className="flex items-center">
          <MessageSquareText className="w-4 h-4" />
        </span>
      </motion.button>
      
      {/* Smaller tooltip for the feedback button */}
      <div className="fixed bottom-16 right-6 bg-popover text-popover-foreground px-3 py-1 rounded-lg shadow-lg z-40 text-xs animate-fade-in">
        Give feedback
      </div>
      
      {/* Overlay Modal for Feedback Form */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay background */}
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Feedback form container */}
            <motion.div
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="bg-background rounded-lg shadow-lg overflow-hidden relative border">
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-1 hover:bg-[#f5f5f5] transition-colors"
                  aria-label="Close feedback form"
                >
                  <X size={16} className="text-[#555]" />
                </button>
                
                <div className="h-[600px] w-full">
                  <SubscribeForm 
                    formId="Y5r3mjhF" 
                    height={600}
                    onClose={() => setIsOpen(false)}
                    showCloseButton={false}
                  />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackTab;
