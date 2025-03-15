
import { useEffect, useRef } from 'react';

interface SubscribeFormProps {
  formId: string;
  height?: number;
}

const SubscribeForm = ({ formId, height = 300 }: SubscribeFormProps) => {
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
    <div className="max-w-2xl mx-auto rounded-md overflow-hidden border border-border">
      <div 
        ref={formContainerRef}
        className={`h-[${height}px]`}
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
