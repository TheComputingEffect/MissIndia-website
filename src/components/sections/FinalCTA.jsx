import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, CalendarHeart } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="relative py-32 z-10 overflow-hidden mt-12">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brand-dark z-0"></div>
        
        {/* Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent opacity-70 blur-3xl z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#011415] to-transparent z-10"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent z-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent z-20"></div>

        {/* Floating Particles (CSS Animation) */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-40">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_10px_#7FE7E7] animate-[float_10s_ease-in-out_infinite]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border border-brand-secondary/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden group"
        >
          {/* Inner Glow Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <span className="text-brand-accent text-sm uppercase tracking-[0.3em] font-body mb-6 block relative z-10">Begin the Journey</span>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-10 leading-tight text-glow relative z-10">
            Let's Create Your <br className="hidden md:block"/> 
            <span className="italic font-light text-brand-secondary">Dream Celebration</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-dark rounded-full font-body font-medium uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(127,231,231,0.6)] transition-all duration-300 flex items-center justify-center group/btn">
              <CalendarHeart className="mr-3 group-hover/btn:scale-110 transition-transform" size={20} />
              Book Consultation
            </Link>
            <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 border border-brand-secondary/40 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider hover:border-[#25D366] hover:text-[#25D366] transition-all duration-300 flex items-center justify-center bg-brand-dark/50 backdrop-blur-sm group/btn">
              <MessageCircle className="mr-3 group-hover/btn:scale-110 transition-transform" size={20} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
          50% { transform: translateY(-100px) scale(1.5); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default FinalCTA;
