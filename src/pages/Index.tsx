
import { useEffect, useState } from 'react';
import BrandGallery from '@/components/BrandGallery';
import FashionWeekTable from '@/components/FashionWeekTable';
import brands from '@/data/brands';
import Hero from '@/components/Hero';
import ViewToggle from '@/components/ViewToggle';
import PageFooter from '@/components/PageFooter';
import FeedbackButton from '@/components/FeedbackButton';
import FeedbackModal from '@/components/FeedbackModal';
import SubscriptionPopup from '@/components/SubscriptionPopup';

const Index = () => {
  const [viewMode, setViewMode] = useState<'gallery' | 'table'>('table');
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    // Add a smooth scroll behavior to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleSubscribeComplete = () => {
    setShowSubscribe(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content */}
      <main className="container py-12 px-4" id="brand-gallery">
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} brandsCount={brands.length} />
        
        {viewMode === 'table' ? (
          <FashionWeekTable brands={brands} />
        ) : (
          <BrandGallery brands={brands} />
        )}
      </main>
      
      {/* Footer */}
      <PageFooter />
      
      {/* Subscription Popup */}
      <SubscriptionPopup 
        showSubscribe={showSubscribe} 
        setShowSubscribe={setShowSubscribe} 
        onComplete={handleSubscribeComplete} 
      />
      
      {/* Feedback Modal */}
      <FeedbackModal 
        showFeedback={showFeedback} 
        setShowFeedback={setShowFeedback} 
      />
      
      {/* Feedback Button */}
      <FeedbackButton setShowFeedback={setShowFeedback} />
    </div>
  );
};

export default Index;
