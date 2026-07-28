import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-8", rowSpan: "row-span-2" },
  { id: 2, src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 3, src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-4", rowSpan: "row-span-1" },
  { id: 4, src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
  { id: 5, src: "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", colSpan: "col-span-12 md:col-span-6", rowSpan: "row-span-1" },
];

const FeaturedGallery = () => {
  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16"
        >
          <div>
            <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary">
              A Glimpse of <span className="text-brand-accent italic font-light">Perfection</span>
            </h2>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-2 border-b border-brand-accent text-brand-secondary hover:text-brand-accent transition-colors font-body text-sm tracking-wider uppercase pb-2">
            View Full Gallery
          </button>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-xl ${img.colSpan} ${img.rowSpan} border border-brand-secondary/10 hover:border-brand-accent/50 transition-colors duration-500 shadow-glass cursor-pointer`}
            >
              <img 
                src={img.src} 
                alt="Event Gallery" 
                className="w-full h-full object-cover grayscale-0 opacity-100 md:grayscale md:opacity-70 md:group-hover:grayscale-0 md:group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 md:opacity-100 md:group-hover:opacity-0 transition-opacity duration-500"></div>
              {/* Silver Glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(217,214,207,0)] group-hover:shadow-[inset_0_0_50px_rgba(127,231,231,0.3)] transition-shadow duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGallery;
