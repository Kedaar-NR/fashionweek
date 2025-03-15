
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface SubscribeFormProps {
  formId: string;
  height?: number;
  onClose?: () => void;
  onComplete?: () => void;
  showCloseButton?: boolean;
}

const SubscribeForm = ({ 
  formId, 
  height = 280, 
  onClose, 
  onComplete,
  showCloseButton = false 
}: SubscribeFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    
    // Only append the script once
    if (!document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')) {
      document.body.appendChild(script);
    }

    // Add event listener for typeform submission
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from Typeform and is a form submission
      if (
        event.data && 
        event.data.type === 'form-submit' &&
        event.data.formId === formId
      ) {
        // Call the onComplete callback when the form is submitted
        if (onComplete) {
          onComplete();
        }
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Set a fallback timeout to stop showing the loading state
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
    };
  }, [formId, onComplete]);

  return (
    <div className="w-full rounded-md overflow-hidden border border-[#eaeaea] relative bg-white">
      {showCloseButton && onClose && (
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:bg-[#f5f5f5] transition-colors"
          aria-label="Close subscription form"
        >
          <X size={14} className="text-[#555]" />
        </button>
      )}
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="w-6 h-6 border-2 border-[#f97316] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <div 
        ref={formContainerRef}
        style={{ height: `${height}px` }}
        data-tf-widget={formId}
        data-tf-opacity="100" 
        data-tf-inline-embed="true"
        data-tf-auto-focus
        data-tf-iframe-props="title=FashionWeek Subscription" 
        data-tf-transitive-search-params 
        data-tf-medium="snippet" 
        data-tf-hidden="utm_source=website,utm_medium=inline_embed"
        onLoad={() => setIsLoading(false)}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
      ></div>
    </div>
  );
};

export default SubscribeForm;
