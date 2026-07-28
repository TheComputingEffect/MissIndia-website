import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, X, Check } from 'lucide-react';

const EventModal = ({ event, onClose }) => {
  const titleLength = event.title.length;
  let titleFontSizeClass = 'text-3xl sm:text-4xl lg:text-[2.5rem]';
  if (titleLength > 30) {
    titleFontSizeClass = 'text-2xl sm:text-3xl lg:text-[1.85rem]';
  } else if (titleLength > 20) {
    titleFontSizeClass = 'text-2xl sm:text-3xl lg:text-[2.15rem]';
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-brand-dark/95 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[1050px] lg:h-[580px] max-h-[80vh] flex flex-col lg:flex-row overflow-hidden rounded-[2rem] bg-[#020e10]/80 backdrop-blur-2xl border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] mt-8 lg:mt-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:top-6 lg:right-6 z-50 w-11 h-11 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          aria-label="Close modal"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform duration-500" />
        </button>

        {/* Image Side (Left) */}
        <div className="relative w-full lg:w-[45%] h-[35vh] min-h-[250px] lg:h-full shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          {/* Soft luxury gradient overlays for blending */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020e10] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#020e10]/20 lg:to-[#020e10]" />
        </div>

        {/* Content Side (Right) - Internal Scrolling */}
        <div className="relative w-full lg:w-[55%] flex flex-col p-8 sm:p-10 lg:p-12 overflow-y-auto custom-scrollbar">
          <div className="my-auto">
            <h2 className={`font-heading font-bold text-white mb-5 leading-[1.15] ${titleFontSizeClass}`}>
              {event.title}
            </h2>
            <p className="text-brand-secondary/70 font-body text-sm sm:text-base leading-relaxed mb-10">
              {event.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {event.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-brand-accent/40 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand-accent" />
                  </div>
                  <span className="text-brand-secondary/90 font-body text-xs sm:text-sm font-medium tracking-wide">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-auto lg:mt-4">
              <a
                href="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center px-9 py-4 bg-brand-accent text-brand-dark rounded-full font-body font-semibold uppercase tracking-[0.15em] text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 group"
              >
                Book This Service
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventModal;
