
import { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetDescription,
  SheetTrigger
} from '@/components/ui/sheet';
import { MessageSquareText } from 'lucide-react';
import { motion } from 'framer-motion';
import SubscribeForm from '@/components/SubscribeForm';
import { useToast } from '@/hooks/use-toast';

export const FeedbackTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  
  const handleFeedbackComplete = () => {
    setIsOpen(false);
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
      duration: 3000,
    });
  };
  
  return (
    <>
      <motion.button
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50 hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <span className="flex items-center">
          <MessageSquareText className="w-4 h-4" />
        </span>
      </motion.button>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger id="feedback-trigger" className="hidden" />
        <SheetContent className="sm:max-w-md p-0 gap-0">
          <div className="h-[600px] w-full">
            <SubscribeForm 
              formId="Y5r3mjhF" 
              height={600}
              showCloseButton={false}
              onComplete={handleFeedbackComplete}
            />
          </div>
        </SheetContent>
      </Sheet>

      {/* Smaller tooltip for the feedback button */}
      <div className="fixed bottom-16 right-6 bg-popover text-popover-foreground px-3 py-1 rounded-lg shadow-lg z-40 text-xs animate-fade-in">
        Give feedback
      </div>
    </>
  );
};

export default FeedbackTab;
