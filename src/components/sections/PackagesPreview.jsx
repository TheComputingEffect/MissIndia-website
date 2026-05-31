import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import clsx from 'clsx';

const packages = [
  {
    name: 'Silver',
    price: 'Essential',
    desc: 'Perfect for intimate gatherings and seamless coordination.',
    features: ['Venue Selection', 'Basic Decor Setup', 'Vendor Referrals', 'Day-of Coordination'],
    highlighted: false,
  },
  {
    name: 'Royal Luxury',
    price: 'Signature',
    desc: 'Our most sought-after cinematic and immersive experience.',
    features: ['Complete Event Design', 'Premium Custom Decor', 'Full Vendor Management', 'Cinematic Lighting & AV', 'Dedicated Event Manager', 'VIP Guest Hospitality'],
    highlighted: true,
  },
  {
    name: 'Platinum',
    price: 'Premium',
    desc: 'Comprehensive planning for elaborate and grand celebrations.',
    features: ['Custom Thematic Design', 'Advanced Floral Arrangements', 'Entertainment Sourcing', 'Multi-day Coordination'],
    highlighted: false,
  }
];

const PackageCard = ({ pkg, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={clsx(
        'relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-500',
        pkg.highlighted 
          ? 'bg-gradient-to-b from-brand-dark to-[#032a2c] border-brand-accent shadow-[0_0_40px_rgba(127,231,231,0.2)] md:-mt-8 md:mb-8 z-10 scale-105' 
          : 'glass-card border-brand-secondary/20 hover:border-brand-accent/50 mt-4 mb-4 z-0'
      )}
    >
      {pkg.highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="bg-brand-accent text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-glow">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8 border-b border-brand-secondary/10 pb-8 mt-4">
        <h3 className={clsx(
          'font-heading font-bold mb-2',
          pkg.highlighted ? 'text-3xl text-brand-accent' : 'text-2xl text-brand-secondary'
        )}>
          {pkg.name}
        </h3>
        <p className="text-white font-heading tracking-widest text-lg mb-4 uppercase">
          {pkg.price}
        </p>
        <p className="text-brand-secondary/70 font-body text-sm leading-relaxed h-10">
          {pkg.desc}
        </p>
      </div>

      <ul className="flex-1 space-y-4 mb-10">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start text-brand-secondary/80 font-body text-sm">
            <Check size={18} className="text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className={clsx(
        'w-full py-4 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 font-medium',
        pkg.highlighted 
          ? 'bg-brand-accent text-brand-dark hover:bg-white hover:shadow-glow' 
          : 'border border-brand-secondary/50 text-brand-secondary hover:border-brand-accent hover:text-brand-accent'
      )}>
        Request Quote
      </button>
    </motion.div>
  );
};

const PackagesPreview = () => {
  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body mb-4 block">Curated Offerings</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary">
            Bespoke <span className="text-brand-accent italic font-light">Packages</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
