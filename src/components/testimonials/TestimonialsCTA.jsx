import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useConsultation } from '../../utils/ConsultationContext';

const TestimonialsCTA = () => {
  const { openModal } = useConsultation();
  return (
    <section className="py-24 bg-transparent border-t border-brand-secondary/20">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto glass-card p-12 md:p-16 rounded-3xl border border-brand-secondary/20">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Let's Create Your Next <span className="text-gradient">Memorable Event</span>
          </h2>
          
          <p className="text-lg text-brand-secondary/90 font-body mb-10 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of happy clients who trusted us to turn their celebrations into unforgettable experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={openModal} className="px-8 py-4 bg-brand-secondary text-brand-dark rounded-full font-body font-medium uppercase tracking-wider hover:bg-brand-accent transition-colors duration-300 w-full sm:w-auto flex items-center justify-center cursor-pointer">
              Book Consultation
              <ArrowRight className="ml-2" size={18} />
            </button>
            <Link to="/contact" className="px-8 py-4 border border-brand-secondary/50 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 w-full sm:w-auto glass-card">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCTA;
