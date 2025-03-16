
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import { X } from 'lucide-react';

interface SubscriptionPanelProps {
  showSubscribe: boolean;
  setShowSubscribe: (show: boolean) => void;
  handleSubscribeComplete: () => void;
  showBlurb?: boolean;
}

const SubscriptionPanel = ({ 
  showSubscribe, 
  setShowSubscribe, 
  handleSubscribeComplete,
  showBlurb = true
}: SubscriptionPanelProps) => {
  if (!showSubscribe) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {showBlurb && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm border border-[#eaeaea]">
          Sign up!
        </div>
      )}
      <div className="fixed bottom-24 right-6 z-40 bg-background shadow-lg border rounded-lg w-[420px] animate-fade-in overflow-hidden">
        {/* Header with close button */}
        <div className="p-3 border-b flex justify-between items-center bg-primary/5">
          <h3 className="text-sm font-medium">Sign up!</h3>
          <button 
            onClick={() => setShowSubscribe(false)} 
            className="p-1 rounded-full hover:bg-background/80 transition-colors"
            aria-label="Close subscription form"
          >
            <X size={16} className="text-muted-foreground" />
          </button>
        </div>
        
        <div className="p-3">
          <SubscribeForm formId="Q5fonbTT" height={450} onComplete={handleSubscribeComplete} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPanel;
