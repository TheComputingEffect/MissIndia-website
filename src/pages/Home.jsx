import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import TrustedStats from '../components/sections/TrustedStats';
import EventCategories from '../components/sections/EventCategories';
import FeaturedGallery from '../components/sections/FeaturedGallery';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ProcessTimeline from '../components/sections/ProcessTimeline';
import Testimonials from '../components/sections/Testimonials';
import FinalCTA from '../components/sections/FinalCTA';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Wedding & Event Planner | MISSINDIA</title>
        <meta name="description" content="MISSINDIA offers luxury wedding planning, birthday events, baby showers, corporate events, decorations, and premium event management services." />
      </Helmet>
      
      <div className="flex flex-col gap-y-32 pb-32">
        <Hero />
        <TrustedStats />
        <EventCategories />
        <FeaturedGallery />
        <WhyChooseUs />
        <ProcessTimeline />
        <Testimonials />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
