
import { useEffect, useRef, useState } from 'react';

interface FeedbackFormProps {
  formId: string;
}

const FeedbackForm = ({ formId }: FeedbackFormProps) => {
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

    // Set a fallback timeout to stop showing the loading state
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="w-full rounded-md overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="w-6 h-6 border-2 border-[#f97316] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <div 
        ref={formContainerRef}
        style={{ height: '600px' }}
        data-tf-widget={formId}
        data-tf-opacity="100" 
        data-tf-inline-embed="true"
        data-tf-auto-focus
        data-tf-iframe-props="title=FashionWeek Feedback" 
        data-tf-transitive-search-params 
        data-tf-medium="snippet" 
        data-tf-hidden="utm_source=website,utm_medium=feedback_form"
        onLoad={() => setIsLoading(false)}
        className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
      ></div>
    </div>
  );
};

export default FeedbackForm;
