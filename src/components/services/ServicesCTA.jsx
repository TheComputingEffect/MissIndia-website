import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarHeart, FileText } from 'lucide-react';
import { useConsultation } from '../../utils/ConsultationContext';

const STATIC_CTA_PARTICLES = [...Array(12)].map(() => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  duration: `${10 + Math.random() * 10}s`,
  delay: `${Math.random() * 5}s`
}));

const ServicesCTA = () => {
  const { openModal } = useConsultation();
  return (
    <section
      id="services-cta"
      className="relative py-32 z-10 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(217,214,207,0.08)_0%,transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#011415] to-transparent" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent" />

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          {STATIC_CTA_PARTICLES.map((p, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_10px_#7FE7E7]"
              style={{
                top: p.top,
                left: p.left,
                animation: `svcCtaFloat ${p.duration} ease-in-out ${p.delay} infinite`,
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
          transition={{ duration: 1, ease: 'easeOut' }}
          className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border border-brand-secondary/15 shadow-[0_30px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl relative overflow-hidden group"
        >
          {/* Inner glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.3em] font-body mb-6 block relative z-10"
          >
            Your Vision, Our Craft
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight relative z-10"
            style={{
              textShadow: '0 0 15px rgba(127, 231, 231, 0.2)',
            }}
          >
            Let's Make Your Celebration
            <br className="hidden md:block" />
            <span className="italic font-light text-brand-secondary">
              {' '}Truly Special
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-secondary/75 font-body text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 relative z-10"
          >
            From stunning decorations to beautiful photography, elegant
            invitations to exquisite garlands — let our team craft every detail
            of your dream celebration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10"
          >
            <button
              onClick={openModal}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-dark rounded-full font-body font-medium uppercase tracking-wider text-sm hover:bg-white hover:shadow-[0_0_30px_rgba(127,231,231,0.6)] transition-all duration-300 flex items-center justify-center group/btn cursor-pointer"
            >
              <CalendarHeart
                className="mr-3 group-hover/btn:scale-110 transition-transform"
                size={20}
              />
              Book Consultation
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-brand-secondary/40 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider text-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-300 flex items-center justify-center bg-brand-dark/50 backdrop-blur-sm group/btn"
            >
              <FileText
                className="mr-3 group-hover/btn:scale-110 transition-transform"
                size={20}
              />
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes svcCtaFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
          50% { transform: translateY(-100px) scale(1.5); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ServicesCTA;
