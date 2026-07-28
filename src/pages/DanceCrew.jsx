import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Flame, Star, Sparkles as SparkleIcon, X } from 'lucide-react';



import { db } from '../services/db';

const DanceCrew = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [coverImage] = useState(() => {
    const covers = db.getCoverImages();
    return covers.find(c => c.id === 'dance')?.imageUrl || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80";
  });

  const services = [
    {
      title: "Choreographed Performances",
      description: "Synchronized luxury dance routines for grand entrances, sangeets, and receptions.",
      icon: <Star className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Flash Mobs",
      description: "Surprise luxury entertainment perfectly executed for engagements and parties.",
      icon: <SparkleIcon className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Stage Effects",
      description: "Cold sparks, dry ice clouds, and synchronized pyro visuals for maximum impact.",
      icon: <Flame className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Interactive Entertainment",
      description: "Engaging your guests with high-energy crowd participation and premium vibes.",
      icon: <Play className="w-8 h-8 text-brand-accent" />
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533174000255-0824b206f520?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470229722913-7c090be5bb10?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <main className="relative overflow-hidden bg-brand-dark">
      <Helmet>
        <title>Luxury Dance Crew & Effects | MISSINDIA</title>
        <meta name="description" content="Premium dance crew and stage effects including cold sparks and choreographies by MISSINDIA." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="hero-section w-full px-6 lg:px-12 pt-32 pb-12 lg:pb-24 relative z-10 flex flex-col lg:flex-row items-center min-h-screen bg-transparent overflow-hidden"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center w-full">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 mt-12 lg:mt-0 order-2 lg:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight uppercase tracking-wide">
              Premium <br/> <span className="text-brand-accent">Dance Crew</span>
            </h1>
            <p className="text-xl md:text-2xl text-brand-secondary/80 font-heading tracking-wide mt-4 uppercase">
              Stage Performance & Effects
            </p>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-secondary/70 font-body text-base md:text-lg max-w-xl leading-relaxed"
          >
            Elevate your event with our luxury dance crews and state-of-the-art stage effects. From meticulously choreographed grand entrances to spectacular cold spark displays, we bring cinematic energy to your celebration.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="/contact" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-accent/90 transition-colors duration-300 shadow-[0_0_20px_rgba(127,231,231,0.3)]"
            >
              Book Entertainment
            </a>
            <a 
              href="#gallery" 
              className="px-8 py-4 border border-brand-secondary/30 text-brand-secondary font-body font-bold text-sm uppercase tracking-widest rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 glass-card"
            >
              View Gallery
            </a>
          </motion.div>
        </div>

        {/* Right Hero Image (Replaces 3D Canvas) */}
        <div className="w-full lg:w-1/2 h-[350px] md:h-[450px] lg:h-[550px] order-1 lg:order-2 relative z-10 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-full rounded-3xl overflow-hidden border border-brand-secondary/20 shadow-glass"
          >
            <img
              src={coverImage}
              alt="Luxury Dance Performance stage with Cold Sparks Blast Effects"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl glass-card border border-brand-secondary/10 hover:border-brand-accent/50 transition-colors duration-500 group"
            >
              <div className="mb-6 p-4 bg-brand-dark/50 rounded-full inline-block group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-secondary mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-brand-secondary/60 font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights (Masonry Gallery) */}
      <section id="gallery" className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Performance <span className="text-brand-accent">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6" />
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx % 3 * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img 
                src={src} 
                alt={`Dance Crew Highlight ${idx + 1}`} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="p-4 rounded-full bg-brand-accent/20 backdrop-blur-sm border border-brand-accent/50">
                  <Play className="w-8 h-8 text-brand-accent ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-brand-accent/0 group-hover:border-brand-accent/50 rounded-2xl transition-all duration-500 z-10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 p-2 text-brand-secondary hover:text-brand-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen Highlight"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-brand-accent/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default DanceCrew;
