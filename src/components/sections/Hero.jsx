import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useConsultation } from '../../utils/ConsultationContext';

const Hero = () => {
  const containerRef = useRef(null);
  const { openModal } = useConsultation();

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} className="hero-section relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-brand-dark z-10">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/60 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/40 via-transparent to-brand-dark z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Luxury Wedding Setup" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center mt-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={item} className="mb-6">
            <span className="inline-block py-1 px-4 rounded-full border border-brand-accent/50 text-brand-accent text-xs md:text-sm tracking-[0.2em] uppercase font-body bg-brand-accent/5 backdrop-blur-sm shadow-glow">
              Luxury Wedding & Event Experiences
            </span>
          </motion.div>
          
          <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight text-glow">
            Crafting Timeless <br className="hidden md:block" />
            <span className="text-gradient">Celebrations With Elegance</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-lg md:text-xl text-brand-secondary/90 font-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Luxury weddings, birthdays, baby showers, engagements, and unforgettable premium celebrations designed with perfection.
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/services" className="px-8 py-4 bg-brand-secondary text-brand-dark rounded-full font-body font-medium uppercase tracking-wider hover:bg-brand-accent hover:shadow-glow transition-all duration-300 w-full sm:w-auto flex items-center justify-center group">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <button onClick={openModal} className="px-8 py-4 border border-brand-secondary/50 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider hover:border-brand-accent hover:text-brand-accent transition-all duration-300 w-full sm:w-auto glass-card group relative overflow-hidden cursor-pointer">
              <span className="relative z-10">Book Consultation</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-brand-secondary/60 text-xs uppercase tracking-widest font-body mb-4">Scroll to explore</span>
        <div className="w-px h-16 bg-brand-secondary/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-accent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
