import { motion } from 'framer-motion';
import { Shirt, TrendingUp, Sparkles, Calendar, Mail, Users } from 'lucide-react';
import { Brand } from '@/types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';
import { SubscribeForm } from '@/components/SubscribeForm';

interface HeaderProps {
  brandCount: number;
}

const Header = ({
  brandCount
}: HeaderProps) => {
  const isMobile = useIsMobile();
  
  return <motion.header initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="relative py-12 md:py-16 overflow-hidden border-b border-[#eaeaea] bg-gradient-to-b from-[#ffffff] to-[#fafafa]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#F97316]/5" animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 5, 0]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        repeatType: "reverse"
      }} />
        <motion.div className="absolute top-20 -left-20 w-48 h-48 rounded-full bg-[#8B5CF6]/5" animate={{
        scale: [1, 1.1, 1],
        rotate: [0, -5, 0]
      }} transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 1
      }} />
        
        {/* Floating fashion icons */}
        <motion.div className="absolute top-10 right-[15%] text-[#F97316]/20" animate={{
        y: [0, -8, 0]
      }} transition={{
        duration: 4,
        repeat: Infinity
      }}>
          <Shirt size={32} />
        </motion.div>
        
        <motion.div className="absolute bottom-10 left-[20%] text-[#8B5CF6]/20" animate={{
        y: [0, 8, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity,
        delay: 1
      }}>
          <Calendar size={28} />
        </motion.div>
        
        <motion.div className="absolute top-1/2 right-[30%] text-[#10B981]/20" animate={{
        y: [0, -10, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity,
        delay: 2
      }}>
          <TrendingUp size={24} />
        </motion.div>
      </div>

      <div className="container relative z-10">
        {/* Navigation menu - blended with background */}
        <motion.div 
          className="py-3 px-4 md:px-8 bg-transparent shadow-sm mb-8 border-b border-[#eaeaea]/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center gap-1">
              <Sparkles size={18} className="text-[#F97316]" />
              <a href="/" className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FCD34D]">
                FashionWeek
              </a>
            </div>
            
            {isMobile ? (
              <ScrollArea className="w-[180px]">
                <div className="flex items-center gap-4 pr-4 menu-scroll">
                  <a href="#brand-gallery" className="flex items-center gap-1.5 hover:text-[#F97316] transition-colors whitespace-nowrap">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">Drops</span>
                  </a>
                  
                  <div className="group relative">
                    <a href="mailto:info@fashionweek.com" className="flex items-center gap-1.5 hover:text-[#F97316] transition-colors whitespace-nowrap">
                      <Mail size={16} />
                      <span className="text-sm font-medium">Contact</span>
                    </a>
                    <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#111] text-xs p-1.5 rounded shadow-lg pointer-events-none whitespace-nowrap menu-tooltip">
                      <div className="font-medium bg-gradient-to-r from-[#F97316] to-[#FCD34D] bg-clip-text text-transparent">Sign up!</div>
                      info@fashionweek.com
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1.5 bg-[#f5f5f5] rounded-full px-3 py-1 whitespace-nowrap">
                    <Users size={16} />
                    <span className="text-sm font-medium bg-gradient-to-r from-[#F97316] via-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">150,000 readers</span>
                  </div>
                </div>
              </ScrollArea>
            ) : (
              <div className="flex items-center gap-6">
                <a href="#brand-gallery" className="flex items-center gap-1.5 hover:text-[#F97316] transition-colors">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">Drops</span>
                </a>
                
                <div className="group relative">
                  <a href="mailto:info@fashionweek.com" className="flex items-center gap-1.5 hover:text-[#F97316] transition-colors">
                    <Mail size={16} />
                    <span className="text-sm font-medium">Contact</span>
                  </a>
                  <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#111] text-xs p-1.5 rounded shadow-lg pointer-events-none whitespace-nowrap menu-tooltip">
                    <div className="font-medium bg-gradient-to-r from-[#F97316] to-[#FCD34D] bg-clip-text text-transparent">Sign up!</div>
                    info@fashionweek.com
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 bg-[#f5f5f5] rounded-full px-3 py-1">
                  <Users size={16} />
                  <span className="text-sm font-medium bg-gradient-to-r from-[#F97316] via-[#8B5CF6] to-[#10B981] bg-clip-text text-transparent">150,000 readers</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Hero content */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4,
        duration: 0.7
      }} className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.8,
          duration: 0.5
        }} className="text-lg md:text-xl max-w-xl mt-2 mb-8 text-zinc-950">
            Track upcoming drops and discover emerging designers shaping the future of fashion.
          </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 1,
          duration: 0.5
        }} className="flex flex-col items-center gap-4">
            <div className="py-2.5 px-5 rounded-full text-white font-medium shadow-lg brand-count-indicator">
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span className="font-bold">{brandCount}</span>&nbsp;brands with upcoming drops
              </span>
            </div>
            
            <div className="w-full max-w-md">
              <SubscribeForm 
                formId="Q5fonbTT" 
                height={100} 
                showCloseButton={false}
              />
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex gap-2 w-full max-w-sm"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            <input
              type="text"
              placeholder="Enter email or phone"
              className="flex-1 px-4 py-2 rounded-full border border-[#eaeaea] focus:outline-none focus:border-[#F97316] text-sm"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full font-medium text-sm text-white shadow-lg transition-transform hover:scale-105 bg-gradient-to-r from-[#F97316] via-[#FB923C] to-[#FCD34D]"
            >
              Join
            </button>
          </motion.form>
        </motion.div>
      </div>
    </motion.header>;
};
export default Header;
