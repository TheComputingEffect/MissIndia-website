import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'PLATE DECORATION & WEDDING RING PLATTERS',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    description:
      'Beautifully crafted engagement trays and wedding ring platters featuring floral arrangements, decorative elements, personalized styling, and premium presentation for your special ceremony.',
    features: [
      'Engagement Trays',
      'Wedding Ring Platters',
      'Floral Arrangements',
      'Decorative Elements',
      'Personalized Styling',
      'Premium Presentation',
    ],
  },
  {
    id: 2,
    title: 'STAGE DECORATION & PARTY DECORATIONS',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    description:
      'Luxury venue transformations, floral installations, themed décor concepts, reception backdrops, birthday decorations, and celebration styling that create breathtaking environments.',
    features: [
      'Venue Transformations',
      'Floral Installations',
      'Themed Décor Concepts',
      'Reception Backdrops',
      'Birthday Decorations',
      'Celebration Styling',
    ],
  },
  {
    id: 3,
    title: 'WEDDING PHOTOGRAPHY',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80',
    description:
      'Professional wedding photography capturing timeless memories through candid moments, traditional coverage, couple portraits, and cinematic storytelling that preserves your special day forever.',
    features: [
      'Candid Photography',
      'Traditional Coverage',
      'Couple Portraits',
      'Cinematic Storytelling',
      'Pre-Wedding Shoots',
      'Album Design',
    ],
  },
  {
    id: 4,
    title: 'INVITATION PRINTING & DESIGNING',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    description:
      'Customized invitation concepts, wedding cards, engagement invitations, premium printing solutions, and digital invitation designs crafted with elegance and attention to detail.',
    features: [
      'Wedding Cards',
      'Engagement Invitations',
      'Custom Concepts',
      'Premium Printing',
      'Digital Invitations',
      'Luxury Packaging',
    ],
  },
  {
    id: 5,
    title: 'GIFTS, HAMPERS & BOUQUETS',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    description:
      'Luxury gift hampers, premium floral bouquets, festive gifting collections, customized gifts, and celebration packages curated for every memorable occasion.',
    features: [
      'Luxury Gift Hampers',
      'Premium Bouquets',
      'Festive Collections',
      'Customized Gifts',
      'Celebration Packages',
      'Corporate Gifting',
    ],
  },
  {
    id: 6,
    title: 'RETURN GIFTS',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    description:
      'Personalized return gifts designed for weddings, baby showers, puberty ceremonies, family functions, and special occasions with thoughtful presentation and premium quality.',
    features: [
      'Wedding Return Gifts',
      'Baby Shower Favors',
      'Ceremony Gifts',
      'Personalized Items',
      'Premium Packaging',
      'Bulk Orders',
    ],
  },
  {
    id: 7,
    title: 'IDOL DECORATION & IDOL SAREE DRAPING',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80',
    description:
      'Traditional decoration services for Varalakshmi Nombu and Navarathiri celebrations including floral arrangements, jewelry styling, saree draping, and festive setups.',
    features: [
      'Varalakshmi Nombu Setup',
      'Navarathiri Decorations',
      'Floral Arrangements',
      'Jewelry Styling',
      'Idol Saree Draping',
      'Festive Setups',
    ],
  },
  {
    id: 8,
    title: 'WEDDING GARLANDS',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description:
      'Fresh handcrafted wedding garlands created using premium flowers, traditional techniques, and customized floral designs that add grace and beauty to your ceremony.',
    features: [
      'Fresh Flower Garlands',
      'Premium Flowers',
      'Traditional Designs',
      'Customized Styles',
      'Bridal Garlands',
      'Ceremony Garlands',
    ],
  },
];

const ServiceCard = ({ service, index, onOpen }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay: index * 0.08 }}
    className="group relative rounded-2xl overflow-hidden cursor-pointer border border-brand-secondary/10 hover:border-brand-accent/40 transition-colors duration-500"
    onClick={() => onOpen(service)}
  >
    {/* Image */}
    <div className="relative h-64 md:h-72 overflow-hidden">
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Dark glass overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      {/* Hover glow */}
      <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
      <h3 className="font-heading text-base md:text-lg font-bold text-white mb-2 group-hover:text-brand-accent transition-colors duration-300 leading-tight">
        {service.title}
      </h3>
      <p className="text-brand-secondary/70 font-body text-sm leading-relaxed line-clamp-2 mb-4">
        {service.description}
      </p>
      <div className="flex items-center text-brand-accent font-body text-xs uppercase tracking-[0.15em]">
        <span className="mr-2">Learn More</span>
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform duration-300"
        />
      </div>
    </div>
  </motion.div>
);

const ServiceModal = ({ service, onClose }) => (
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
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      {/* Body */}
      <div className="p-8 md:p-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
          {service.title}
        </h2>
        <p className="text-brand-secondary/80 font-body text-sm md:text-base leading-relaxed mb-8">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {service.features.map((feature, i) => (
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
          Get a Quote
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const ServicesShowcase = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services-showcase"
      className="relative py-24 md:py-32 z-50 bg-[#011415]"
    >
      {/* Background decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px]" />
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
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-secondary mb-6"
          >
            Our Premium{' '}
            <span className="text-brand-accent italic font-light">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-secondary/70 font-body text-sm md:text-base leading-relaxed"
          >
            From elegant decorations to exquisite photography, every service is designed
            to make your celebration truly unforgettable.
          </motion.p>
        </div>

        {/* Grid — 4 columns on large screens for 8 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpen={setSelectedService}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ServicesShowcase;
