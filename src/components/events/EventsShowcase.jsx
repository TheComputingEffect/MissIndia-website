import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';

const eventsData = [
  {
    id: 1,
    title: 'DJ SERVICES',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    description:
      'Professional DJs, premium sound systems, lighting effects, live mixing, wedding receptions, private events, and entertainment experiences that transform every celebration into an electrifying affair.',
    features: [
      'Professional DJs',
      'Premium Sound Systems',
      'LED Lighting Effects',
      'Live Music Mixing',
      'Private Events',
      'Wedding Receptions',
    ],
  },
  {
    id: 2,
    title: 'DANCE CREW WITH PYROS & BLAST EFFECTS',
    image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?auto=format&fit=crop&w=800&q=80',
    description:
      'Professional dance performances enhanced with cold sparks, pyrotechnics, stage blasts, grand entries, and high-energy choreography that bring unforgettable spectacle to every event.',
    features: [
      'Professional Dance Teams',
      'Cold Spark Effects',
      'Pyrotechnic Shows',
      'Stage Blasts',
      'Grand Entry Performances',
      'Celebrity Style Productions',
    ],
  },
  {
    id: 3,
    title: 'MAKEOVERS, SAREE PRE-PLEATING & SAREE DRAPING',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description:
      'Professional makeup, hairstyling, saree draping, and complete event-ready looks for weddings, engagements, puberty functions, baby showers, and family celebrations.',
    features: [
      'Wedding Makeovers',
      'Engagement Styling',
      'Puberty Function Looks',
      'Baby Shower Styling',
      'Saree Pre-Pleating',
      'Traditional & Modern Looks',
    ],
  },
  {
    id: 4,
    title: 'COLLABORATION SHOOTS, MODELLING SHOOTS & BRAND PROMOTIONS',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    description:
      'Creative photoshoots, influencer collaborations, modelling portfolios, commercial campaigns, and social media brand promotions with premium visual storytelling.',
    features: [
      'Brand Promotion',
      'Influencer Collaborations',
      'Modelling Portfolios',
      'Fashion Campaigns',
      'Content Creation',
      'Social Media Branding',
    ],
  },
  {
    id: 5,
    title: 'CORPORATE EVENTS',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description:
      'Corporate meetings, conferences, product launches, award ceremonies, networking events, employee engagement programs, and company celebrations delivered with sophistication.',
    features: [
      'Product Launches',
      'Corporate Conferences',
      'Award Ceremonies',
      'Networking Events',
      'Employee Engagement',
      'Company Celebrations',
    ],
  },
  {
    id: 6,
    title: 'LOVED ONE SURPRISE EVENTS',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    description:
      'Birthday surprises, anniversary surprises, proposals, welcome events, romantic setups, and customized memorable experiences designed to delight your loved ones.',
    features: [
      'Birthday Surprises',
      'Anniversary Celebrations',
      'Proposal Planning',
      'Welcome Events',
      'Romantic Setups',
      'Customized Experiences',
    ],
  },
  {
    id: 7,
    title: 'WEDDING & ENGAGEMENT EVENTS',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    description:
      'Elegant wedding and engagement celebrations planned with attention to every detail, including décor, entertainment, styling, photography coordination, and memorable guest experiences.',
    features: [
      'Wedding Planning Support',
      'Engagement Ceremonies',
      'Venue Styling',
      'Entertainment Coordination',
      'Guest Experience Management',
      'Luxury Celebration Concepts',
    ],
  },
  {
    id: 8,
    title: 'PUBERTY CEREMONY EVENTS',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80',
    description:
      'Traditional puberty ceremony celebrations thoughtfully organized with customized decorations, cultural elements, stage setups, photography coordination, and guest arrangements.',
    features: [
      'Traditional Decorations',
      'Floral Arrangements',
      'Stage Setup',
      'Photography Coordination',
      'Guest Management',
      'Customized Themes',
    ],
  },
  {
    id: 9,
    title: 'BABY SHOWER EVENTS',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description:
      'Beautiful baby shower celebrations designed with themed decorations, customized setups, floral arrangements, entertainment, and memorable experiences for family and friends.',
    features: [
      'Theme-Based Decorations',
      'Balloon Styling',
      'Floral Arrangements',
      'Welcome Setups',
      'Photography Support',
      'Customized Celebration Concepts',
    ],
  },
];

const EventCard = ({ event, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    className="group relative rounded-2xl overflow-hidden cursor-pointer border border-brand-secondary/10 hover:border-brand-accent/40 transition-colors duration-500"
    onClick={() => onOpen(event)}
  >
    {/* Image */}
    <div className="relative h-72 md:h-80 overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Dark glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      {/* Hover glow */}
      <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
      <h3 className="font-heading text-lg md:text-xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300 leading-tight">
        {event.title}
      </h3>
      <p className="text-brand-secondary/70 font-body text-sm leading-relaxed line-clamp-2 mb-4">
        {event.description}
      </p>
      <div className="flex items-center text-brand-accent font-body text-xs uppercase tracking-[0.15em] group/btn">
        <span className="mr-2 group-hover/btn:mr-3 transition-all duration-300">
          Book Now
        </span>
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </div>
    </div>
  </motion.div>
);

const EventModal = ({ event, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-xl"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card border border-brand-secondary/20 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-dark/80 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary hover:text-brand-accent hover:border-brand-accent/50 transition-colors duration-300"
        aria-label="Close modal"
      >
        <X size={18} />
      </button>

      {/* Image */}
      <div className="relative h-56 md:h-72 overflow-hidden rounded-t-3xl">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-8 md:p-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
          {event.title}
        </h2>
        <p className="text-brand-secondary/80 font-body text-sm md:text-base leading-relaxed mb-8">
          {event.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {event.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-brand-secondary/80 font-body text-sm"
            >
              <div className="w-5 h-5 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center flex-shrink-0">
                <Check size={10} className="text-brand-accent" />
              </div>
              {feature}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-3.5 bg-brand-accent text-brand-dark rounded-full font-body font-medium uppercase tracking-wider text-sm hover:bg-white hover:shadow-glow transition-all duration-300 group"
        >
          Book This Service
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const EventsShowcase = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section
      id="events-showcase"
      className="relative py-24 md:py-32 z-50 bg-[#011415]"
    >
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-4 block"
          >
            Our Signature Events
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-secondary mb-6"
          >
            Signature{' '}
            <span className="text-brand-accent italic font-light">
              Experiences
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-secondary/70 font-body text-sm md:text-base leading-relaxed"
          >
            Exceptional experiences tailored to every celebration and occasion.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {eventsData.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
              onOpen={setSelectedEvent}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsShowcase;
