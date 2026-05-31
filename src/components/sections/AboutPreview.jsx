import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Floating Image Collage */}
          <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/10 to-transparent opacity-50 blur-2xl"></div>
            
            <motion.div
              initial={{ opacity: 0, x: -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 left-0 w-2/3 h-[70%] rounded-2xl overflow-hidden shadow-glass border border-brand-secondary/20 z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Wedding Setup" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute bottom-0 right-0 w-2/3 h-[60%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-secondary/30 z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Elegant Table Setting" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Decorative Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-brand-accent/30 flex items-center justify-center z-30 backdrop-blur-md bg-brand-dark/30"
            >
              <span className="font-heading text-brand-accent tracking-widest text-sm text-center">Since<br/>2019</span>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body mb-4 block">About MISSINDIA</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary mb-8 leading-tight">
                Where Luxury Meets <span className="text-brand-accent italic font-light">Celebration</span>
              </h2>
              
              <div className="space-y-6 text-brand-secondary/80 font-body leading-relaxed mb-10">
                <p>
                  At MISSINDIA, we believe that every milestone deserves to be celebrated with unparalleled elegance. We are a premier luxury event management company dedicated to curating bespoke experiences that transcend the ordinary.
                </p>
                <p>
                  From cinematic weddings and extravagant birthdays to exclusive corporate galas, our meticulous attention to detail ensures that every element of your event is a masterpiece of design and coordination.
                </p>
              </div>

              <Link to="/about" className="inline-flex px-8 py-4 border border-brand-secondary/50 text-brand-secondary rounded-full font-body text-sm uppercase tracking-wider hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card group relative overflow-hidden">
                <span className="relative z-10">Discover Our Story</span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
