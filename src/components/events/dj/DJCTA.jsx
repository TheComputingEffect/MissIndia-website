import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DJCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-transparent relative z-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-brand-accent/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
        >
          Turn Up The <span className="text-brand-accent italic font-light">Energy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-brand-secondary/80 font-body text-base md:text-lg max-w-2xl mx-auto mb-10"
        >
          Bring your celebration to life with professional DJ entertainment and premium event experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-4 bg-brand-accent text-brand-dark rounded-full font-body font-medium uppercase tracking-wider text-sm hover:bg-white hover:shadow-glow transition-all duration-300"
          >
            Book Your DJ
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-10 py-4 border border-brand-secondary/30 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider text-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DJCTA;
