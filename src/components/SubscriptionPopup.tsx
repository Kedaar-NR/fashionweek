
import { Dispatch, SetStateAction } from 'react';
import SubscribeForm from '@/components/SubscribeForm';
import { X } from 'lucide-react';

interface SubscriptionPopupProps {
  showSubscribe: boolean;
  setShowSubscribe: Dispatch<SetStateAction<boolean>>;
  onComplete: () => void;
}

const SubscriptionPopup = ({ showSubscribe, setShowSubscribe, onComplete }: SubscriptionPopupProps) => {
  if (!showSubscribe) return null;
  
  return (
    <div className="fixed bottom-24 right-6 z-40 bg-white shadow-lg border border-[#eaeaea] p-3 rounded-lg w-[300px] animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xs font-medium">Subscribe to Updates</h3>
        <button 
          onClick={() => setShowSubscribe(false)} 
          className="p-1 rounded-full hover:bg-[#f5f5f5] transition-colors" 
          aria-label="Close subscription form"
        >
          <X size={12} />
        </button>
      </div>
      <SubscribeForm formId="Q5fonbTT" height={220} onComplete={onComplete} />
    </div>
  );
};

export default SubscriptionPopup;
