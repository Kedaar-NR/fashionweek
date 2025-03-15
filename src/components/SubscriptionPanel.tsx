
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import { useToast } from '@/hooks/use-toast';

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
  const { toast } = useToast();
  
  const onSubscribeComplete = () => {
    handleSubscribeComplete();
    toast({
      title: "Subscription successful!",
      description: "You've been added to our mailing list.",
      duration: 3000,
    });
  };
  
  if (!showSubscribe) return null;
  
  return (
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
      <SubscribeForm formId="Q5fonbTT" height={350} onComplete={onSubscribeComplete} />
    </div>
  );
};

export default SubscriptionPanel;
