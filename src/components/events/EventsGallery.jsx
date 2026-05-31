import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    alt: 'DJ Events',
    category: 'DJ Events',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?auto=format&fit=crop&w=600&q=80',
    alt: 'Dance Performances',
    category: 'Dance Performances',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    alt: 'Wedding Styling',
    category: 'Wedding Styling',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    alt: 'Corporate Gatherings',
    category: 'Corporate Gatherings',
    span: '',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    alt: 'Brand Shoots',
    category: 'Brand Shoots',
    span: 'md:col-span-2',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
    alt: 'Surprise Celebrations',
    category: 'Surprise Celebrations',
    span: '',
  },
];

const EventsGallery = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      id="events-gallery"
      className="relative py-24 md:py-32 z-10 bg-[#011415]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary"
          >
            Event{' '}
            <span className="text-brand-accent italic font-light">
              Highlights
            </span>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 auto-rows-[220px] md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${item.span}`}
              onClick={() => setLightbox(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center mb-3 backdrop-blur-sm">
                  <ZoomIn size={20} className="text-brand-accent" />
                </div>
                <span className="text-white font-heading text-sm tracking-wider uppercase">
                  {item.category}
                </span>
              </div>
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-accent/30 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-dark/95 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-brand-dark/80 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary hover:text-brand-accent transition-colors"
              aria-label="Close lightbox"
            >
              <X size={18} />
            </button>
            <motion.img
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4 }}
              src={lightbox.src.replace('w=600', 'w=1200')}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <span className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-secondary/80 font-heading text-sm tracking-widest uppercase">
              {lightbox.category}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsGallery;
