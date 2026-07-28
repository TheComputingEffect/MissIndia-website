import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80', alt: 'Wedding DJ Setup' },
  { id: 2, src: 'https://images.unsplash.com/photo-1571266028243-cb41f53e10a3?auto=format&fit=crop&w=1000&q=80', alt: 'Club Style DJ Performance' },
  { id: 3, src: 'https://images.unsplash.com/photo-1470229722913-7c090be5f524?auto=format&fit=crop&w=1000&q=80', alt: 'DJ with Crowd' },
  { id: 4, src: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1000&q=80', alt: 'DJ Console and Lighting' },
];

const DJShowcase = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white tracking-widest uppercase"
          >
            Event <span className="text-brand-accent italic font-light">Vibes</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group border border-brand-secondary/10 hover:border-brand-accent/30 transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-heading text-xl md:text-2xl font-bold tracking-wide">
                  {img.alt}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJShowcase;
