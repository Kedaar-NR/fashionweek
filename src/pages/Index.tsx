
import { useState } from 'react';
import brands from '@/data/brands';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import FeedbackTab from '@/components/FeedbackTab';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Page Header */}
      <Header brandCount={brands.length} />
      
      {/* Main Content */}
      <MainContent brands={brands} />
      
      {/* Footer */}
      <Footer />
      
      {/* Add the Feedback Tab component */}
      <FeedbackTab />
    </div>
  );
};

export default Index;
