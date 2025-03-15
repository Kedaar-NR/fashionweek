
import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeformUrl?: string;
}

const SubscribeModal = ({ isOpen, onClose, typeformUrl = "https://form.typeform.com/to/Q5fonbTT" }: SubscribeModalProps) => {
  // Create a containment div for the Typeform embed
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = "https://embed.typeform.com/next/embed.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Stay Updated with FashionWeek</DialogTitle>
          <DialogDescription className="pt-2">
            Subscribe to receive notifications about upcoming fashion drops and exclusive events.
          </DialogDescription>
        </DialogHeader>
        
        <div className="h-[450px] mt-4 overflow-hidden rounded-md border">
          <div 
            data-tf-widget={typeformUrl.split('/').pop()}
            data-tf-opacity="100" 
            data-tf-iframe-props="title=FashionWeek Subscription" 
            data-tf-transitive-search-params 
            data-tf-medium="snippet" 
            data-tf-hidden="utm_source=website,utm_medium=subscribe_popup"
            className="w-full h-full"
          ></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
