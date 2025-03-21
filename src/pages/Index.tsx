
import { useState } from 'react';
import brands from '@/data/brands';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';
import FeedbackTab from '@/components/FeedbackTab';
import { SavedBrandsProvider } from '@/context/SavedBrandsContext';
import SavedBrandsDrawer from '@/components/SavedBrandsDrawer';
import UserButton from '@/components/auth/UserButton';

const Index = () => {
  const [savedBrandsOpen, setSavedBrandsOpen] = useState(false);

  return (
    <SavedBrandsProvider brands={brands}>
      <div className="min-h-screen bg-[#fafafa] text-[#111]">
        {/* Page Header */}
        <Header brandCount={brands.length}>
          <UserButton openSavedBrands={() => setSavedBrandsOpen(true)} />
        </Header>
        
        {/* Main Content */}
        <MainContent brands={brands} />
        
        {/* Footer */}
        <Footer />
        
        {/* Add the Feedback Tab component */}
        <FeedbackTab />
        
        {/* Saved Brands Drawer */}
        <SavedBrandsDrawer
          open={savedBrandsOpen}
          onClose={() => setSavedBrandsOpen(false)}
        />
      </div>
    </SavedBrandsProvider>
  );
};

export default Index;
