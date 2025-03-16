
import { useState } from 'react';
import brands from '@/data/brands';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import SubscriptionPanel from '@/components/SubscriptionPanel';
import FeedbackTab from '@/components/FeedbackTab';

const Index = () => {
  const [showSubscribe, setShowSubscribe] = useState(true);
  const [showBlurb, setShowBlurb] = useState(true);
  
  const handleSubscribeComplete = () => {
    setShowSubscribe(false);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111]">
      {/* Page Header */}
      <Header brandCount={brands.length} />
      
      {/* Main Content */}
      <MainContent brands={brands} />
      
      {/* Subscribe Form - Conditionally displayed */}
      <SubscriptionPanel 
        showSubscribe={showSubscribe}
        setShowSubscribe={setShowSubscribe}
        handleSubscribeComplete={handleSubscribeComplete}
        showBlurb={showBlurb}
      />
      
      {/* Footer */}
      <Footer />
      
      {/* Add the Feedback Tab component */}
      <FeedbackTab />
    </div>
  );
};

export default Index;
