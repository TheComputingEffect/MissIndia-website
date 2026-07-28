import React from 'react';
import { Helmet } from 'react-helmet-async';
import EventsHero from '../components/events/EventsHero';
import EventGrid from '../components/events/EventGrid';
import EventsShowcase from '../components/events/EventsShowcase';
import EventsWhyChoose from '../components/events/EventsWhyChoose';
import EventsGallery from '../components/events/EventsGallery';
import EventsTestimonials from '../components/events/EventsTestimonials';
import EventsCTA from '../components/events/EventsCTA';

const Events = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventPlanningBusiness",
    "name": "MISS INDIA EVENTS",
    "description": "Professional event management services including weddings, engagements, baby showers, puberty ceremonies, corporate events, DJ entertainment, dance performances, modelling shoots, and surprise celebrations.",
    "url": "https://missindiaevents.com/events",
    "areaServed": "Coimbatore, India",
    "serviceType": [
      "Wedding & Engagement Events",
      "DJ Services",
      "Dance Crew, Pyros & Blast Effects",
      "Puberty Ceremony Events",
      "Baby Shower Events",
      "Collaboration & Modelling Shoots",
      "Corporate Events",
      "Surprise Events for Loved Ones"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Events Management Services | MISS INDIA EVENTS</title>
        <meta
          name="description"
          content="Professional event management services including weddings, engagements, baby showers, puberty ceremonies, corporate events, DJ entertainment, dance performances, modelling shoots, and surprise celebrations."
        />
        <meta
          name="keywords"
          content="Event Management Coimbatore, Wedding Event Planner, Corporate Event Management, Baby Shower Events, Puberty Ceremony Planning, DJ Services, Dance Crew, Pyro Effects, Modelling Shoots, Brand Promotions, Surprise Events, MISS INDIA EVENTS"
        />
        <meta property="og:title" content="Luxury Event Management Services | MISS INDIA EVENTS" />
        <meta
          property="og:description"
          content="Discover premium event planning and celebration services for weddings, corporate gatherings, baby showers, modelling shoots, and unforgettable special occasions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://missindiaevents.com/events" />
        <link rel="canonical" href="https://missindiaevents.com/events" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="flex flex-col relative z-10 overflow-hidden bg-brand-dark">
        <EventsHero />
        <EventGrid />
        <EventsShowcase />
        <EventsWhyChoose />
        <EventsGallery />
        <EventsTestimonials />
        <EventsCTA />
      </div>
    </>
  );
};

export default Events;
