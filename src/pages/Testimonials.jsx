import React from 'react';
import { Helmet } from 'react-helmet-async';
import TestimonialsHero from '../components/testimonials/TestimonialsHero';
import FeaturedTestimonials from '../components/testimonials/FeaturedTestimonials';
import TestimonialStats from '../components/testimonials/TestimonialStats';
import VideoTestimonials from '../components/testimonials/VideoTestimonials';
import ClientTrust from '../components/testimonials/ClientTrust';
import TestimonialsFAQ from '../components/testimonials/TestimonialsFAQ';
import TestimonialsCTA from '../components/testimonials/TestimonialsCTA';
import NightSkyBackground from '../components/NightSkyBackground';

const Testimonials = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Client Testimonials | MISSINDIA Events & Services",
    "description": "Read genuine client experiences and success stories from weddings, engagements, baby showers, corporate events, photography, decorations, and celebration services.",
    "url": "https://missindiaevents.com/testimonials"
  };

  return (
    <>
      <Helmet>
        <title>Client Testimonials & FAQs | MISSINDIA Events</title>
        <meta
          name="description"
          content="Read genuine customer reviews, testimonials, and frequently asked questions about our wedding, event management, photography, decoration, and celebration services."
        />
        <meta
          name="keywords"
          content="Client Testimonials, Customer Reviews, Wedding Testimonials, Event Reviews, Customer Feedback, Wedding Services, Event Management Reviews, FAQ, Celebration Services, MISSINDIA Events"
        />
        <meta property="og:title" content="MISSINDIA Client Testimonials" />
        <meta
          property="og:description"
          content="Explore authentic client experiences, reviews, and answers to frequently asked questions about our premium event and wedding services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://missindiaevents.com/testimonials" />
        <link rel="canonical" href="https://missindiaevents.com/testimonials" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="flex flex-col relative overflow-hidden bg-brand-dark">
        <NightSkyBackground />
        <TestimonialsHero />
        <TestimonialStats />
        <FeaturedTestimonials />
        <VideoTestimonials />
        <ClientTrust />
        <TestimonialsFAQ />
        <TestimonialsCTA />
      </div>
    </>
  );
};

export default Testimonials;
