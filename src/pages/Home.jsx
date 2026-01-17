import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import FeaturedCourses from '../components/home/FeaturedCourses';
import WhyUsSection from '../components/home/WhyUsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturedCourses />
      <WhyUsSection />
      <CTASection />
    </div>
  );
}