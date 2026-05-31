import React from 'react';
import { motion } from 'framer-motion';

const DanceVisual = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=2000&q=80" 
          alt="Where performance meets spectacle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#011415] via-brand-dark/50 to-[#011415]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-heading font-bold text-white tracking-wide uppercase drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
            Where Performance <br />
            <span className="text-orange-400 italic font-light">Meets Spectacle</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default DanceVisual;
