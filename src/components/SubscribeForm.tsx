
import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';

interface SubscribeFormProps {
  formId: string;
  height?: number;
  onClose?: () => void;
  onComplete?: () => void;
  showCloseButton?: boolean;
}

const SubscribeForm = ({ 
  formId, 
  height = 350,
  onClose, 
  onComplete,
  showCloseButton = true 
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

    // Log to track loading
    console.log(`Loading Typeform with ID: ${formId}`);

    // Add event listener for typeform submission
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from Typeform and is a form submission
      if (
        event.data && 
        event.data.type === 'form-submit' &&
        event.data.formId === formId
      ) {
        console.log('Form submitted successfully');
        // Call the onComplete callback when the form is submitted
        if (onComplete) {
          onComplete();
        }
        // Show success toast
        toast.success('Form submitted successfully!');
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Set a fallback timeout to stop showing the loading state
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      console.log('Typeform loading timeout reached');
    }, 5000); // Increased timeout to 5 seconds for slow connections

    // Cleanup
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timeoutId);
    };
  }, [formId, onComplete]);

  // Reset loading state if the form ID changes
  useEffect(() => {
    setIsLoading(true);
  }, [formId]);

  return (
    <div className="w-full rounded-md overflow-hidden border border-[#eaeaea] relative bg-white">
      {showCloseButton && onClose && (
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:bg-[#f5f5f5] transition-colors"
          aria-label="Close subscription form"
        >
          <X size={16} className="text-[#555]" />
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
        data-tf-auto-focus="true"
        data-tf-iframe-props="title=Feedback Form" 
        data-tf-transitive-search-params 
        data-tf-medium="snippet" 
        data-tf-hidden="utm_source=website,utm_medium=inline_embed"
        onLoad={() => {
          setIsLoading(false);
          console.log('Typeform loaded successfully');
        }}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
      ></div>
    </div>
  );
};

export default SubscribeForm;
