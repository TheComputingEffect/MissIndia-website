import React from 'react';
import { Helmet } from 'react-helmet-async';
import FeaturedTestimonials from '../components/testimonials/FeaturedTestimonials';
import VideoTestimonials from '../components/testimonials/VideoTestimonials';
import TestimonialsFAQ from '../components/testimonials/TestimonialsFAQ';
import TestimonialsCTA from '../components/testimonials/TestimonialsCTA';

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
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="flex flex-col relative overflow-hidden bg-brand-dark pt-28 md:pt-36">
        <FeaturedTestimonials />
        <VideoTestimonials />
        <TestimonialsFAQ />
        <TestimonialsCTA />
      </main>
    </>
  );
};

export default Testimonials;
