import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: "Aarti & Rahul",
    event: "Wedding & Engagement Event",
    content: "From planning to execution, every detail was handled beautifully. The team made our special day truly unforgettable.",
    rating: 5
  },
  {
    name: "Priya Menon",
    event: "Baby Shower Event",
    content: "The decorations, coordination, and attention to detail exceeded our expectations. Everything looked perfect.",
    rating: 5
  },
  {
    name: "Karthik & Sneha",
    event: "Wedding Photography",
    content: "Our wedding memories were captured so beautifully. Every picture tells a story we will cherish forever.",
    rating: 5
  },
  {
    name: "TechNova Solutions",
    event: "Corporate Event",
    content: "Professional, organized, and creative. The event was executed flawlessly and impressed all our guests.",
    rating: 5
  },
  {
    name: "Meera Reddy",
    event: "Stage Decoration",
    content: "The décor completely transformed the venue. The setup was elegant, sophisticated, and exactly what we envisioned.",
    rating: 5
  },
  {
    name: "The Sharma Family",
    event: "Invitation & Gift Services",
    content: "The invitation designs and curated gift hampers added a premium touch to our celebration.",
    rating: 5
  }
];

const FeaturedTestimonials = () => {
  return (
    <section id="featured-testimonials" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-accent tracking-widest uppercase text-sm font-medium mb-4 block">
            Genuine Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Heartfelt Words From Our Clients
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 md:p-12 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/50 transition-colors duration-300 flex flex-col justify-between min-h-[320px] relative"
            >
              <div>
                <div className="absolute top-8 right-8 opacity-10">
                  <Quote size={60} className="text-brand-accent" />
                </div>
                
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-brand-accent fill-brand-accent" />
                  ))}
                </div>
                
                <p className="text-brand-secondary/90 text-[16px] md:text-[18px] font-body leading-relaxed mb-10 relative z-10 italic">
                  "{testimonial.content}"
                </p>
              </div>
              
              <div className="border-t border-brand-secondary/10 pt-6 relative z-10">
                <h4 className="text-white font-heading text-xl font-semibold">{testimonial.name}</h4>
                <p className="text-brand-accent text-sm font-body mt-1">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTestimonials;
