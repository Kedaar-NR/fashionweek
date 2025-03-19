
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { Calendar, Mail, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const NavigationBar = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="py-4 px-4 md:px-8 bg-gradient-to-r from-black via-black to-[#222] shadow-md mb-8 border-b border-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/609f11de-e0fa-4d9b-98c2-26f24df8183b.png" 
            alt="FashionWeek Logo" 
            className="w-16 h-16"
          />
          <a href="/" className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-white">
            FashionWeek
          </a>
        </div>
        
        {isMobile ? (
          <ScrollArea className="w-[180px]">
            <div className="flex items-center gap-4 pr-4 menu-scroll">
              <a href="#brand-gallery" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors whitespace-nowrap">
                <Calendar size={16} />
                <span className="text-sm font-medium">Drops</span>
              </a>
              
              <div className="group relative">
                <a href="mailto:info@fashionweek.com" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors whitespace-nowrap">
                  <Mail size={16} />
                  <span className="text-sm font-medium">Contact</span>
                </a>
                <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs p-1.5 rounded shadow-lg pointer-events-none whitespace-nowrap menu-tooltip">
                  <div className="font-medium bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Sign up!</div>
                  info@fashionweek.com
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1 whitespace-nowrap">
                <Users size={16} className="text-white" />
                <span className="text-sm font-medium bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">150,000 readers</span>
              </div>
            </div>
          </ScrollArea>
        ) : (
          <div className="flex items-center gap-6">
            <a href="#brand-gallery" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors">
              <Calendar size={16} />
              <span className="text-sm font-medium">Drops</span>
            </a>
            
            <div className="group relative">
              <a href="mailto:info@fashionweek.com" className="flex items-center gap-1.5 text-white hover:text-gray-300 transition-colors">
                <Mail size={16} />
                <span className="text-sm font-medium">Contact</span>
              </a>
              <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs p-1.5 rounded shadow-lg pointer-events-none whitespace-nowrap menu-tooltip">
                <div className="font-medium bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Sign up!</div>
                info@fashionweek.com
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
              <Users size={16} className="text-white" />
              <span className="text-sm font-medium bg-gradient-to-r from-gray-100 to-white bg-clip-text text-transparent">150,000 readers</span>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NavigationBar;
