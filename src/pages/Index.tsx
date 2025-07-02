
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ExpertiseSection from '../components/ExpertiseSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import StatisticsSection from '../components/StatisticsSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ExpertiseSection />
      <ExperienceSection />
      <EducationSection />
      <StatisticsSection />
      <FeaturedProjectsSection />
    </Layout>
  );
};

export default Index;
