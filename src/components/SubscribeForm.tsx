
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface SubscribeFormProps {
  formId: string;
  height?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

const SubscribeForm = ({ 
  formId, 
  height = 280, 
  onClose, 
  showCloseButton = false 
}: SubscribeFormProps) => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Typeform embed script
    const script = document.createElement('script');
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    
    // Only append the script once
    if (!document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')) {
      document.body.appendChild(script);
    }

    // Cleanup
    return () => {
      // Don't remove the script as it might be used by other components
    };
  }, []);

  return (
    <div className="w-full rounded-md overflow-hidden border border-border relative">
      {showCloseButton && onClose && (
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 z-10 bg-secondary/80 rounded-full p-1 hover:bg-secondary transition-colors"
          aria-label="Close subscription form"
        >
          <X size={16} className="text-secondary-foreground" />
        </button>
      )}
      <div 
        ref={formContainerRef}
        style={{ height: `${height}px` }}
        data-tf-widget={formId}
        data-tf-opacity="100" 
        data-tf-inline-embed
        data-tf-iframe-props="title=FashionWeek Subscription" 
        data-tf-transitive-search-params 
        data-tf-medium="snippet" 
        data-tf-hidden="utm_source=website,utm_medium=inline_embed"
      ></div>
    </div>
  );
};

export default SubscribeForm;
