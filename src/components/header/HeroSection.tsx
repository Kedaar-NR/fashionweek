
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import SubscribeForm from '@/components/SubscribeForm';

interface HeroSectionProps {
  brandCount: number;
}

const HeroSection = ({ brandCount }: HeroSectionProps) => {
  return (
    <motion.div 
      initial={{
        opacity: 0,
        y: 30
      }} 
      animate={{
        opacity: 1,
        y: 0
      }} 
      transition={{
        delay: 0.4,
        duration: 0.7
      }} 
      className="flex flex-col items-center text-center max-w-3xl mx-auto"
    >
      <motion.p 
        initial={{
          opacity: 0,
          y: 20
        }} 
        animate={{
          opacity: 1,
          y: 0
        }} 
        transition={{
          delay: 0.8,
          duration: 0.5
        }} 
        className="text-lg md:text-xl max-w-xl mt-2 mb-8 text-zinc-950"
      >
        Track upcoming drops and discover emerging designers shaping the future of fashion.
      </motion.p>
      
      <motion.div 
        initial={{
          opacity: 0,
          scale: 0.9
        }} 
        animate={{
          opacity: 1,
          scale: 1
        }} 
        transition={{
          delay: 1,
          duration: 0.5
        }} 
        className="flex flex-col items-center gap-4"
      >
        <div className="py-2.5 px-5 rounded-full text-white font-medium shadow-lg">
          <span className="flex items-center">
            <Calendar size={16} className="mr-2" />
            <span>{brandCount}</span>&nbsp;brands with upcoming drops
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
  );
};

export default HeroSection;
