
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle,
  SheetDescription,
  SheetFooter
} from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { MessageSquareText, SendIcon, ArrowRightIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FeedbackTab = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim()) {
      toast({
        title: "Error",
        description: "Please enter your feedback before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Feedback submitted",
        description: "Thank you for your feedback!",
      });
      
      // Reset after some time
      setTimeout(() => {
        setFeedback('');
        setIsSubmitted(false);
        setIsOpen(false);
      }, 2000);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="feedback-tab px-5 py-2 bg-primary text-primary-foreground rounded-t-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
      >
        <span className="flex items-center font-medium">
          <MessageSquareText className="w-4 h-4 mr-2" />
          Feedback
        </span>
      </motion.button>
      
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="glass-panel" side="right">
          <SheetHeader>
            <SheetTitle>Share Your Feedback</SheetTitle>
            <SheetDescription>
              We'd love to hear your thoughts about our brand gallery.
            </SheetDescription>
          </SheetHeader>
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6 py-6"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <label htmlFor="feedback" className="text-sm font-medium">
                    What could we improve?
                  </label>
                  <Textarea
                    id="feedback"
                    placeholder="Share your ideas, suggestions, or report any issues..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <SheetFooter>
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="h-4 w-4 rounded-full border-2 border-background border-t-transparent animate-spin" />
                        <span>Submitting...</span>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <SendIcon className="h-4 w-4 mr-2" />
                        <span>Submit Feedback</span>
                      </div>
                    )}
                  </Button>
                </SheetFooter>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center h-[50vh]"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquareText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Thank You!</h3>
                <p className="text-center text-muted-foreground mb-4">
                  Your feedback has been submitted and will help us improve.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsOpen(false)}
                  className="mt-4"
                >
                  <ArrowRightIcon className="h-4 w-4 mr-2" />
                  Close
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default FeedbackTab;
