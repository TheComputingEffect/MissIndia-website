import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const ComingSoon = ({ title }) => {
  return (
    <main className="relative overflow-hidden w-full">
      <Helmet>
        <title>{title} | MISSINDIA</title>
      </Helmet>
      
      {/* 1. Clean Hero Section (Opaque) */}
      <section className="hero-section min-h-[70vh] bg-brand-dark relative z-10 flex flex-col items-center justify-center pt-32 pb-20 border-b border-brand-secondary/10">
        <div className="container mx-auto px-6 text-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <h4 className="text-brand-accent uppercase tracking-[0.3em] text-sm mb-6 font-body flex items-center justify-center gap-3">
              <Sparkles size={16} /> Experience <Sparkles size={16} />
            </h4>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 text-white text-glow">
              {title}
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-px h-24 bg-gradient-to-b from-brand-accent to-transparent mx-auto mt-12"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. Atmospheric Section (Transparent, reveals Global Background) */}
      <section className="min-h-[80vh] relative z-10 flex flex-col items-center justify-center py-24">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-12 md:p-20 rounded-3xl border border-brand-secondary/20 shadow-[0_0_40px_rgba(127,231,231,0.05)] text-center relative overflow-hidden group hover:border-brand-accent/40 transition-colors duration-700">
              {/* Subtle glow accent inside card */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(127,231,231,0.1),_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 relative z-10">
                Premium Content <span className="text-brand-accent italic font-light">Coming Soon</span>
              </h2>
              
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-accent to-transparent mx-auto mb-8 relative z-10"></div>
              
              <p className="text-brand-secondary/80 text-lg md:text-xl font-body leading-relaxed max-w-2xl mx-auto relative z-10">
                We are currently crafting an exceptional experience for this section. Please check back soon.
              </p>
              
              {/* Atmospheric particles within the card */}
              <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-brand-accent/40 blur-[2px] animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-brand-accent/30 blur-[3px] animate-pulse delay-700"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default ComingSoon;
