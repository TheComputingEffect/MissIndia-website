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
  {
    id: 9,
    title: 'SAREE DRAPING SERVICES',
    image: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&w=800&q=80',
    description:
      'Professional saree draping and pre-pleating services for weddings, engagements, baby showers, puberty ceremonies, festive occasions, and special celebrations.',
    features: [
      'Saree Pre-Pleating',
      'Bridal Saree Draping',
      'Traditional Saree Styling',
      'Wedding Draping',
      'Occasion Styling',
      'Festive Saree Styling',
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

const ServiceModal = ({ service, onClose }) => {
  const titleLength = service.title.length;
  let titleFontSizeClass = 'text-3xl sm:text-4xl lg:text-[2.5rem]';
  if (titleLength > 30) {
    titleFontSizeClass = 'text-2xl sm:text-3xl lg:text-[1.85rem]';
  } else if (titleLength > 20) {
    titleFontSizeClass = 'text-2xl sm:text-3xl lg:text-[2.15rem]';
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-dark/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1050px] lg:h-[580px] max-h-[80vh] flex flex-col lg:flex-row overflow-hidden rounded-[2rem] bg-[#020e10]/80 backdrop-blur-2xl border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] mt-8 lg:mt-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:top-6 lg:right-6 z-50 w-11 h-11 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          aria-label="Close modal"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
        </button>

        {/* Image Side (Left) */}
        <div className="relative w-full lg:w-[45%] h-[35vh] min-h-[250px] lg:h-full shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Soft luxury gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020e10] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#020e10]/20 lg:to-[#020e10]" />
        </div>

        {/* Content Side (Right) - Internal Scrolling */}
        <div className="relative w-full lg:w-[55%] flex flex-col p-8 sm:p-10 lg:p-12 overflow-y-auto custom-scrollbar">
          <div className="my-auto">
            <h2 className={`font-heading font-bold text-white mb-5 leading-[1.15] ${titleFontSizeClass}`}>
              {service.title}
            </h2>
            <p className="text-brand-secondary/70 font-body text-sm sm:text-base leading-relaxed mb-10">
              {service.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-brand-accent/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand-accent" />
                  </div>
                  <span className="text-brand-secondary/90 font-body text-xs sm:text-sm font-medium tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto lg:mt-4">
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center px-9 py-4 bg-brand-accent text-brand-dark rounded-full font-body font-semibold uppercase tracking-[0.15em] text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 group"
              >
                Get a Quote
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

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

        {/* Grid — 3 columns on large screens for 9 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
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
