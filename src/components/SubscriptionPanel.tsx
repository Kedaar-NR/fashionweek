import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import { X } from 'lucide-react';

interface SubscriptionPanelProps {
  showSubscribe: boolean;
  setShowSubscribe: (show: boolean) => void;
  handleSubscribeComplete: () => void;
}

const SubscriptionPanel = ({ 
  showSubscribe, 
  setShowSubscribe, 
  handleSubscribeComplete 
}: SubscriptionPanelProps) => {
  if (!showSubscribe) return null;
  
  return (
    <div className="fixed bottom-24 right-6 z-40 bg-background shadow-lg border rounded-lg w-[320px] animate-fade-in overflow-hidden">
      {/* Header with close button */}
      <div className="p-3 border-b flex justify-between items-center bg-primary/5">
        <h3 className="text-sm font-medium">Sign up for updates</h3>
        <button 
          onClick={() => setShowSubscribe(false)} 
          className="p-1 rounded-full hover:bg-background/80 transition-colors"
          aria-label="Close subscription form"
        >
          <X size={16} className="text-muted-foreground" />
        </button>
      </div>
      
      <div className="p-3">
        <SubscribeForm formId="Q5fonbTT" height={350} onComplete={handleSubscribeComplete} />
      </div>
    </div>
  );
};

export default SubscriptionPanel;
