import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HeroSection from './components/Hero';
import ServicesSection from './components/Services';
import TopSalonsSection from './components/ServiceCard';
import ExpertProfessionalsSection from './components/Professionals';
import WhyChoose from './components/Features';
import ForBusiness from './components/Business';
import TrustSection from './components/Testimonial';
import FeaturedBrands from './components/Brands';
import GrowingTogether from './components/Partners';
import BackToTopButton from './components/FloatingButton';
import SalonListingPage from './pages/salon_professional_Page';
import ProfessionalList from './pages/ProfessionalList';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <div>
              <HeroSection />
              <ServicesSection />
              <TopSalonsSection />
              <ExpertProfessionalsSection />
              <WhyChoose />
              <ForBusiness />
              <TrustSection />
              <FeaturedBrands />
              <GrowingTogether />
              <BackToTopButton />
            </div>
          </Layout>
        }
      />
      <Route
        path="/salons"
        element={
          <Layout>
            <SalonListingPage />
          </Layout>
        }
      />
      <Route
        path="/professionals"
        element={
          <Layout>
            <ProfessionalList />
          </Layout>
        }
      />
    </Routes>

  );
};

export default App;
