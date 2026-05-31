import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Diamond, ShieldCheck, HeartHandshake, Award, Palette } from 'lucide-react';

const features = [
  { id: 1, title: 'Personalized Planning', desc: 'Tailored specifically to your unique vision and style.', icon: HeartHandshake },
  { id: 2, title: 'Premium Decorations', desc: 'Breathtaking floral arrangements and luxury aesthetics.', icon: Diamond },
  { id: 3, title: 'Expert Coordination', desc: 'Flawless execution handled by seasoned professionals.', icon: Award },
  { id: 4, title: 'Luxury Experiences', desc: 'Creating cinematic moments that wow every guest.', icon: Sparkles },
  { id: 5, title: 'Trusted Vendors', desc: 'An exclusive network of premium industry partners.', icon: ShieldCheck },
  { id: 6, title: 'Creative Themes', desc: 'Innovative concepts that set your event apart.', icon: Palette },
];

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-8 rounded-2xl flex items-start space-x-6 group hover:-translate-y-2 transition-all duration-500 border border-brand-secondary/10 hover:border-brand-accent/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="w-14 h-14 rounded-full border border-brand-secondary/20 flex flex-shrink-0 items-center justify-center text-brand-secondary group-hover:text-brand-accent group-hover:border-brand-accent/50 transition-colors duration-500 bg-brand-dark/50 relative z-10 shadow-[0_0_15px_rgba(127,231,231,0)] group-hover:shadow-[0_0_20px_rgba(127,231,231,0.2)]">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      
      <div className="relative z-10">
        <h4 className="font-heading text-xl text-brand-secondary mb-2 group-hover:text-white transition-colors duration-300">
          {feature.title}
        </h4>
        <p className="text-brand-secondary/70 font-body text-sm leading-relaxed">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 z-10 bg-brand-dark/50 border-y border-brand-secondary/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body mb-4 block">The MISSINDIA Difference</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary">
            Excellence in <span className="text-brand-accent italic font-light">Every Detail</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
