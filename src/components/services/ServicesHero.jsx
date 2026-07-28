import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, Award, ShieldCheck, Heart } from 'lucide-react';
import { useConsultation } from '../../utils/ConsultationContext';

const ServicesHero = () => {
  const { openModal } = useConsultation();

  const serviceFeatures = [
    { icon: Star, label: "9+ Signature Services", desc: "Weddings, Decors, Styling & Gifts" },
    { icon: Award, label: "Master Event Stylists", desc: "Crafted with perfection & detail" },
    { icon: ShieldCheck, label: "Seamless Coordination", desc: "Zero stress for your family" },
  ];

  const showcaseCards = [
    {
      title: "Stage & Venue Decor",
      category: "Weddings & Reception",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      tag: "Signature Decor"
    },
    {
      title: "Saree Draping & Makeover",
      category: "Bridal Styling",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      tag: "Bridal Special"
    },
    {
      title: "Plate & Ring Platters",
      category: "Engagement & Ceremonies",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=800&q=80",
      tag: "Traditional Craft"
    },
    {
      title: "Custom Gift Hampers",
      category: "Return Gifts & Festivities",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      tag: "Curated Hampers"
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 bg-brand-dark overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* LEFT SIDE: Heading & Copy */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-brand-accent/40 text-brand-accent text-xs md:text-sm tracking-[0.25em] uppercase font-body bg-brand-accent/10 backdrop-blur-md shadow-glass">
                <Sparkles size={14} className="text-brand-accent animate-pulse" />
                PREMIUM WEDDING & CELEBRATION SERVICES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white uppercase tracking-wide leading-tight mb-6"
            >
              Crafting <span className="text-gradient">Timeless</span> Celebrations
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-secondary/85 font-body text-base md:text-lg leading-relaxed mb-8"
            >
              From exquisite stage decor and high-fashion wedding photography to expert saree draping, garlands, and return gifts—we transform your vision into an unforgettable masterpiece.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
            >
              {serviceFeatures.map((feat, idx) => (
                <div key={idx} className="glass-card p-4 rounded-xl border border-brand-secondary/15 flex flex-col items-start">
                  <feat.icon size={18} className="text-brand-accent mb-2" />
                  <span className="text-white font-heading font-bold text-xs uppercase tracking-wider">{feat.label}</span>
                  <span className="text-brand-secondary/60 text-[11px] font-body mt-1 leading-snug">{feat.desc}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-5"
            >
              <a
                href="#services-showcase"
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-secondary text-brand-dark rounded-full font-body font-bold text-xs md:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-glass group cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={openModal}
                className="w-full sm:w-auto px-8 py-4 border border-brand-secondary/40 text-brand-secondary rounded-full font-body font-bold text-xs md:text-sm uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card flex items-center justify-center gap-2 cursor-pointer"
              >
                <Heart size={16} className="text-brand-accent" />
                <span>Book Consultation</span>
              </button>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Visual Showcase Grid */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 relative"
            >
              {showcaseCards.map((card, idx) => (
                <div 
                  key={idx} 
                  className={`group relative rounded-2xl overflow-hidden border border-brand-secondary/20 hover:border-brand-accent/60 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] ${idx === 1 ? 'translate-y-4' : idx === 2 ? '-translate-y-4' : ''}`}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent flex flex-col justify-end p-4">
                    <span className="text-[10px] font-body uppercase tracking-widest text-brand-accent font-semibold mb-1">
                      {card.tag}
                    </span>
                    <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider leading-snug">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
