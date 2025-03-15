
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { MailIcon, XIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscribeModal = ({ isOpen, onClose }: SubscribeModalProps) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [contactMethod, setContactMethod] = useState<'email' | 'phone'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive updates about new brand drops.",
      });
      
      // Reset form and close modal after showing success
      setTimeout(() => {
        setEmail('');
        setPhone('');
        setIsSubmitted(false);
        onClose();
      }, 2000);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] glass-panel">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Stay Updated</DialogTitle>
          <DialogDescription className="text-center pt-2">
            Subscribe to receive alerts about the latest brand drops.
          </DialogDescription>
        </DialogHeader>
        
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 py-4"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-center space-x-4">
                <Button
                  type="button"
                  variant={contactMethod === 'email' ? 'default' : 'outline'}
                  onClick={() => setContactMethod('email')}
                  className="w-full"
                >
                  Email
                </Button>
                <Button
                  type="button"
                  variant={contactMethod === 'phone' ? 'default' : 'outline'}
                  onClick={() => setContactMethod('phone')}
                  className="w-full"
                >
                  Phone
                </Button>
              </div>
              
              <AnimatePresence mode="wait">
                {contactMethod === 'email' ? (
                  <motion.div
                    key="email"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="phone"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              <DialogFooter>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded-full border-2 border-background border-t-transparent animate-spin" />
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <MailIcon className="h-4 w-4 mr-2" />
                      <span>Subscribe</span>
                    </div>
                  )}
                </Button>
              </DialogFooter>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center justify-center py-10"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MailIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Thank You!</h3>
              <p className="text-center text-muted-foreground">
                You'll receive updates about new brands and drops soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default SubscribeModal;
