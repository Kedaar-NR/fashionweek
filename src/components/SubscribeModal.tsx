
import React, { useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SubscribeForm from '@/components/SubscribeForm';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  typeformId?: string;
}

const SubscribeModal = ({ isOpen, onClose, typeformId = "Q5fonbTT" }: SubscribeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Stay Updated with FashionWeek</DialogTitle>
          <DialogDescription className="pt-2">
            Subscribe to receive notifications about upcoming fashion drops and exclusive events.
          </DialogDescription>
        </DialogHeader>
        
        <div className="h-[450px] mt-4 overflow-hidden rounded-md">
          <SubscribeForm 
            formId={typeformId} 
            height={450} 
            showCloseButton={false}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
