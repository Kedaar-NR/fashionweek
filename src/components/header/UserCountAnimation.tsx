
import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

interface UserCountAnimationProps {
  targetCount: number;
  duration?: number;
}

export const UserCountAnimation: React.FC<UserCountAnimationProps> = ({ 
  targetCount,
  duration = 2000
}) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;
    let hasStarted = false;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        hasStarted = true;
        setIsAnimating(true);
        startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const currentCount = Math.floor(progress * targetCount);
          
          setCount(currentCount);
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          } else {
            setCount(targetCount);
            setIsAnimating(false);
          }
        };
        
        animationFrameId = requestAnimationFrame(animate);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('user-count-animation');
    if (element) observer.observe(element);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (element) observer.unobserve(element);
      observer.disconnect();
    };
  }, [targetCount, duration]);

  return (
    <div 
      id="user-count-animation" 
      className="flex items-center text-sm font-medium text-gray-700 gap-1"
    >
      <Users size={16} className="text-[#F97316]" />
      <span className={`transition-all ${isAnimating ? 'scale-110' : 'scale-100'}`}>
        {count.toLocaleString()} users
      </span>
    </div>
  );
};
