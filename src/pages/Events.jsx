import React from 'react';
import { Helmet } from 'react-helmet-async';
import EventsHero from '../components/events/EventsHero';
import EventsShowcase from '../components/events/EventsShowcase';
import EventsWhyChoose from '../components/events/EventsWhyChoose';
import EventsGallery from '../components/events/EventsGallery';
import EventsTestimonials from '../components/events/EventsTestimonials';
import EventsCTA from '../components/events/EventsCTA';

const Events = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventPlanningBusiness",
    "name": "MISSINDIA Events",
    "description": "Luxury event management services including DJ performances, dance crews, bridal makeovers, corporate events, brand promotions, modelling shoots and surprise celebrations.",
    "url": "https://missindiaevents.com/events",
    "areaServed": "India",
    "serviceType": [
      "DJ Services",
      "Dance Crew Performances",
      "Bridal Makeovers & Saree Draping",
      "Collaboration & Modelling Shoots",
      "Corporate Events",
      "Surprise Events",
      "Wedding & Engagement Events",
      "Puberty Ceremony Events",
      "Baby Shower Events"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Premium Event Management Services | MISSINDIA Events</title>
        <meta
          name="description"
          content="Luxury event management services including DJ performances, dance crews, bridal makeovers, corporate events, brand promotions, modelling shoots and surprise celebrations."
        />
        <meta
          name="keywords"
          content="Event Management, DJ Services, Dance Crew, Corporate Events, Brand Promotion, Modelling Shoots, Wedding Makeover, Surprise Events, Luxury Events, Event Planner India"
        />
        <meta property="og:title" content="MISSINDIA Events" />
        <meta
          property="og:description"
          content="Creating extraordinary celebrations through premium entertainment, styling and event experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://missindiaevents.com/events" />
        <link rel="canonical" href="https://missindiaevents.com/events" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="flex flex-col">
        <EventsHero />
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
