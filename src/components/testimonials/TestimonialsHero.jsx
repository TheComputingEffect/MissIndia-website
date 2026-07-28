import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const TestimonialsHero = () => {
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('featured-testimonials');
    if (reviewsSection) {
      reviewsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[55vh] min-h-[480px] md:h-[65vh] md:min-h-[580px] lg:h-[75vh] lg:min-h-[680px] flex items-center justify-center bg-gradient-to-b from-brand-primary/30 to-brand-dark/80 z-10 pt-44 md:pt-48 lg:pt-56 pb-16">
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-8 md:mb-10">
            <span className="inline-block py-1.5 px-5 rounded-full border border-brand-accent/50 text-brand-accent text-xs md:text-sm tracking-[0.25em] uppercase font-body bg-brand-dark/50 backdrop-blur-sm shadow-glass">
              CLIENT EXPERIENCES
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-white mb-8 md:mb-10 leading-tight uppercase tracking-wider">
            WHAT OUR <span className="text-gradient">CLIENTS SAY</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-brand-secondary/90 font-body max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            Discover the experiences, stories, and feedback from clients who trusted MISS INDIA EVENTS to create memorable celebrations and exceptional moments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
            <button 
              onClick={scrollToReviews}
              className="px-8 py-4 bg-brand-secondary text-brand-dark rounded-full font-body font-bold text-sm uppercase tracking-widest hover:bg-brand-accent transition-colors duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
            >
              <span>View Testimonials</span>
              <ArrowDown className="transition-transform group-hover:translate-y-1" size={16} />
            </button>
            <Link to="/contact" className="px-8 py-4 border border-brand-secondary/50 text-brand-secondary rounded-full font-body font-bold text-sm uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 w-full sm:w-auto glass-card text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsHero;
