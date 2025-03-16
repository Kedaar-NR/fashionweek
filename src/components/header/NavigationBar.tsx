
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sparkles, Calendar, Mail, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const NavigationBar = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="py-3 px-4 md:px-8 bg-black text-white shadow-sm mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Sparkles size={18} className="text-white" />
          <a href="/" className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
            FashionWeek
          </a>
        </div>
        
        {isMobile ? (
          <ScrollArea className="w-[180px]">
            <div className="flex items-center gap-4 pr-4 menu-scroll">
              <a href="#brand-gallery" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors whitespace-nowrap">
                <Calendar size={16} />
                <span className="text-sm font-medium uppercase" style={{ letterSpacing: "1px" }}>Drops</span>
              </a>
              
              <div className="group relative">
                <a href="mailto:info@fashionweek.com" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors whitespace-nowrap">
                  <Mail size={16} />
                  <span className="text-sm font-medium uppercase" style={{ letterSpacing: "1px" }}>Contact</span>
                </a>
                <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs p-1.5 rounded-none shadow-lg pointer-events-none whitespace-nowrap menu-tooltip">
                  <div className="font-medium">Sign up!</div>
                  info@fashionweek.com
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 bg-white text-black rounded-none px-3 py-1 whitespace-nowrap">
                <Users size={16} />
                <span className="text-sm font-medium uppercase" style={{ letterSpacing: "1px" }}>150,000 readers</span>
              </div>
            </div>
          </ScrollArea>
        ) : (
          <div className="flex items-center gap-6">
            <a href="#brand-gallery" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
              <Calendar size={16} />
              <span className="text-sm font-medium uppercase" style={{ letterSpacing: "1px" }}>Drops</span>
            </a>
            
            <div className="group relative">
              <a href="mailto:info@fashionweek.com" className="flex items-center gap-1.5 hover:text-gray-300 transition-colors">
                <Mail size={16} />
                <span className="text-sm font-medium uppercase" style={{ letterSpacing: "1px" }}>Contact</span>
              </a>
              <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs p-1.5 rounded-none shadow-lg pointer-events-none whitespace-nowrap menu-tooltip">
                <div className="font-medium">Sign up!</div>
                info@fashionweek.com
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 bg-white text-black rounded-none px-3 py-1">
              <Users size={16} />
              <span className="text-sm font-medium uppercase" style={{ letterSpacing: "1px" }}>150,000 readers</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
