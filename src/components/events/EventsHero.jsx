import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles as SparklesIcon } from 'lucide-react';
import { useConsultation } from '../../utils/ConsultationContext';

const EventsHero = () => {
  const { openModal } = useConsultation();
  return (
    <section 
      className="hero-section w-full px-6 lg:px-12 pt-32 pb-12 lg:pb-24 relative z-10 flex flex-col lg:flex-row items-center min-h-screen bg-brand-dark overflow-hidden"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      {/* Subtle luxury glow orbs in the background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center w-full relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 mt-12 lg:mt-0 order-2 lg:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4"
          >
            <div>
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-brand-accent/30 text-brand-accent text-xs md:text-sm tracking-[0.25em] uppercase font-body bg-brand-accent/5 backdrop-blur-sm shadow-[0_0_20px_rgba(127,231,231,0.15)] mb-6">
                <SparklesIcon size={14} className="animate-pulse text-brand-accent" />
                PREMIUM EVENT EXPERIENCES
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight uppercase tracking-wide">
              Crafting <br />
              <span className="text-brand-accent text-glow">Unforgettable</span> <br />
              Celebrations
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-secondary/70 font-body text-base md:text-lg max-w-xl leading-relaxed"
          >
            From weddings and baby showers to corporate gatherings and surprise celebrations, MISS INDIA EVENTS creates memorable experiences tailored to every occasion with creativity, elegance, and flawless execution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#event-grid" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(127,231,231,0.3)] hover:scale-105"
            >
              Explore Events
            </a>
            <button 
              onClick={openModal} 
              className="px-8 py-4 border border-brand-secondary/30 text-brand-secondary font-body font-bold text-sm uppercase tracking-widest rounded-full hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card hover:scale-105 cursor-pointer"
            >
              Book Consultation
            </button>
          </motion.div>
        </div>

        {/* Right 3D Scene Area - kept empty to preserve page structure and layout */}
        <div className="w-full lg:w-1/2 h-[350px] lg:h-[600px] order-1 lg:order-2 relative z-0 overflow-hidden" />
      </div>
    </section>
  );
};

export default EventsHero;
