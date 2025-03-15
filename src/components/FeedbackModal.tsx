
import { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';
import FeedbackForm from '@/components/FeedbackForm';

interface FeedbackModalProps {
  showFeedback: boolean;
  setShowFeedback: Dispatch<SetStateAction<boolean>>;
}

const FeedbackModal = ({ showFeedback, setShowFeedback }: FeedbackModalProps) => {
  if (!showFeedback) return null;
  
  return (
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
  );
};

export default FeedbackModal;
