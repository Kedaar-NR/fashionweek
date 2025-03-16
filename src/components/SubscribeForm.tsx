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
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadTypeformScript = () => {
      return new Promise<void>((resolve) => {
        if (document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]')) {
          setScriptLoaded(true);
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = "https://embed.typeform.com/next/embed.js";
        script.async = true;
        script.onload = () => {
          setScriptLoaded(true);
          resolve();
        };
        document.body.appendChild(script);
      });
    };

    const initializeForm = async () => {
      try {
        await loadTypeformScript();
        
        if (typeof window !== 'undefined' && 'tf' in window) {
          const embedElement = formContainerRef.current;
          if (embedElement) {
            embedElement.innerHTML = '';
            
            (window as any).tf.createWidget(formId, {
              container: embedElement,
              height: height,
              width: '100%',
              hidden: { utm_source: 'website', utm_medium: 'inline_embed' },
              onReady: () => {
                setIsLoading(false);
                console.log('Typeform loaded successfully');
                
                const iframe = embedElement.querySelector('iframe');
                if (iframe) {
                  iframe.style.width = '100%';
                  iframe.style.height = '100%';
                  iframe.style.border = 'none';
                }
              },
              onSubmit: () => {
                console.log('Form submitted successfully');
                if (onComplete) {
                  onComplete();
                }
                toast.success('Form submitted successfully!');
              },
            });
          }
        } else {
          console.error('Typeform library not loaded properly');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error initializing Typeform:', error);
        setIsLoading(false);
      }
    };

    initializeForm();

    return () => {
      const embedElement = formContainerRef.current;
      if (embedElement) {
        embedElement.innerHTML = '';
      }
    };
  }, [formId, height, onComplete]);

  return (
    <div className="relative">
      <div className="bg-white p-4 rounded-lg border border-[#eaeaea] shadow-sm">
        <div className="w-full rounded-md overflow-hidden border border-[#eaeaea] relative bg-white flex flex-col">
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
            style={{ 
              height: `${height}px`,
              minHeight: '350px',
              width: '100%'
            }}
            className={`flex-1 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
