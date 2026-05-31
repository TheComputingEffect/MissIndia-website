import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Aisha & Rahul',
    review: 'MISSINDIA turned our dream wedding into a cinematic reality. Every detail was meticulously crafted, and the luxury aesthetic was beyond our expectations.',
    image: 'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    review: 'The coordination and premium decor for my baby shower were flawless. It felt like walking into a luxury magazine spread. Highly recommend their services.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Vikram Mehta',
    review: 'Our corporate gala was an absolute hit. The professionalism and innovative themes provided by the MISSINDIA team set a new benchmark for our company events.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    rating: 5,
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 z-10">
      <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-3xl z-0"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body mb-4 block">Client Diaries</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary">
            Words of <span className="text-brand-accent italic font-light">Love</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative h-[400px] md:h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="glass-card w-full p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left border border-brand-secondary/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-brand-accent p-1">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-2 bg-brand-dark rounded-full p-2 border border-brand-secondary/20 shadow-glow">
                    <Quote size={20} className="text-brand-accent" fill="currentColor" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-center md:justify-start mb-4 space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-brand-accent" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-brand-secondary/90 font-heading text-lg md:text-xl italic leading-relaxed mb-6">
                    "{testimonials[currentIndex].review}"
                  </p>
                  <div>
                    <h4 className="font-heading font-bold text-white text-lg tracking-wider">
                      {testimonials[currentIndex].name}
                    </h4>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'w-8 bg-brand-accent shadow-glow' : 'w-4 bg-brand-secondary/30 hover:bg-brand-secondary/60'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
