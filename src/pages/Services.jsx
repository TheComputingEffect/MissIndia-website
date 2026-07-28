import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero from '../components/services/ServicesHero';
import ServicesShowcase from '../components/services/ServicesShowcase';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "MISSINDIA Services",
    "description": "Premium wedding and celebration services including wedding photography, stage decoration, saree draping services, invitation design, wedding garlands, gift hampers, return gifts and festive decorations.",
    "url": "https://missindiaevents.com/services",
    "areaServed": "India",
    "serviceType": [
      "Plate Decoration & Wedding Ring Platters",
      "Stage Decoration & Party Decorations",
      "Wedding Photography",
      "Invitation Printing & Designing",
      "Gifts, Hampers & Bouquets",
      "Return Gifts",
      "Idol Decoration & Idol Saree Draping",
      "Wedding Garlands",
      "Saree Draping Services"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Luxury Wedding Services | MISSINDIA</title>
        <meta
          name="description"
          content="Premium wedding and celebration services including wedding photography, stage decoration, saree draping services, invitation design, wedding garlands, gift hampers, return gifts and festive decorations."
        />
        <meta
          name="keywords"
          content="Saree Draping Services, Bridal Saree Draping, Traditional Saree Styling, Wedding Saree Draping, Professional Saree Draping, Wedding Photography, Stage Decoration, Wedding Garlands, Invitation Printing, Gift Hampers, Return Gifts, Wedding Services, Festival Decoration, Wedding Decoration, Event Styling"
        />
        <meta property="og:title" content="MISSINDIA Services" />
        <meta
          property="og:description"
          content="Premium wedding and celebration services designed to create elegant and memorable occasions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://missindiaevents.com/services" />
        <link rel="canonical" href="https://missindiaevents.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="flex flex-col">
        <ServicesHero />
        <ServicesShowcase />
        <ServicesCTA />
      </div>
    </>
  );
};

export default Services;
