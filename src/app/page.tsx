import React from 'react';
import { Import, PhoneCall } from 'lucide-react';
import Hero from '../components/sections/home/HeroSlider';
import WelcomeSection from '../components/sections/home/WelcomeSection';
import ServicesSection from '../components/sections/home/ServicesSection';
import MenuSection from '../components/sections/home/MenuSection';
import StatsGallerySection from '../components/sections/home/StatsGallerySection';
import CtaSection from '../components/sections/home/CtaSection';
import BlogSection from '../components/sections/home/BlogSection';
import TestimonialSection from '../components/sections/home/TestimonialSection';
import ReservationSection from '../components/sections/home/ReservationSection';
import TeamSection from '../components/sections/home/TeamSection';

// --- MAIN PAGE ---

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <ServicesSection />
      <MenuSection />
      <StatsGallerySection />
      <TestimonialSection />
      <ReservationSection />
      <TeamSection />
      <CtaSection />
      <BlogSection />
    </>
  );
}