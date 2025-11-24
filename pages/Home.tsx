import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/FeaturesSection';
import { AppShowcase } from '../components/AppShowcase';
import { StatsSection } from '../components/StatsSection';
import { DashboardPreview } from '../components/DashboardPreview';
import { Pricing } from '../components/Pricing';
import { BloodHealth } from '../components/BloodHealth';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturesSection />
      <AppShowcase />
      <StatsSection />
      <div className="py-20 flex flex-col items-center">
        <div className="text-center max-w-2xl px-6 mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-vitrus-dark leading-tight mb-4">
            Revolutionizing Health <br/> Tracking for Tomorrow
          </h2>
          <p className="text-gray-500">
            Fit n Fab offers innovative fitness solutions to help you stay active, build strength, and transform your wellness journey daily.
          </p>
        </div>
        <DashboardPreview />
      </div>
      <Pricing />
      <BloodHealth />
    </main>
  );
};
