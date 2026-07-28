import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80', span: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-2' },
  { id: 4, src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 5, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80', span: 'col-span-2 row-span-1' },
  { id: 7, src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  { id: 8, src: 'https://images.unsplash.com/photo-1470229722913-7c090be5f524?auto=format&fit=crop&w=800&q=80', span: 'col-span-4 lg:col-span-2 row-span-1' },
];

const DanceGallery = () => {
  return (
    <section id="gallery" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white tracking-widest uppercase"
          >
            Performance <span className="text-orange-400 italic font-light">Gallery</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px] max-w-7xl mx-auto">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={clsx('relative rounded-xl overflow-hidden group', img.span)}
            >
              <img
                src={img.src}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceGallery;
