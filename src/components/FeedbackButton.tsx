
import { Dispatch, SetStateAction } from 'react';

interface FeedbackButtonProps {
  setShowFeedback: Dispatch<SetStateAction<boolean>>;
}

const FeedbackButton = ({ setShowFeedback }: FeedbackButtonProps) => {
  return (
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
  );
};

export default FeedbackButton;
