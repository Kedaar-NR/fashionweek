
import { useState, useEffect } from 'react';
import { MessageSquareText, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import { toast } from 'sonner';

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

  const handleOpenForm = () => {
    setIsOpen(true);
    // Log when the feedback form is opened
    console.log('Feedback form opened');
  };
  
  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50 hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpenForm}
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
      
      {/* Chatbot-like Feedback Form */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50 w-full max-w-sm md:max-w-md"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <div className="bg-background rounded-lg shadow-xl overflow-hidden border subscribe-form-appear">
              {/* Header with close button */}
              <div className="p-3 border-b flex justify-between items-center bg-primary/5">
                <h3 className="text-sm font-medium">Give us your feedback</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-full hover:bg-background/80 transition-colors"
                  aria-label="Close feedback form"
                >
                  <X size={16} className="text-muted-foreground" />
                </button>
              </div>
              
              <div className="h-[500px] w-full">
                <SubscribeForm 
                  formId="Y5r3mjhF" 
                  height={500}
                  onClose={() => setIsOpen(false)}
                  showCloseButton={false}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FeedbackTab;
