import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Speaker, Lightbulb, Mic2, Music, PartyPopper, Cake, Briefcase } from 'lucide-react';

const highlights = [
  { id: 1, label: 'Professional DJ', icon: Headphones },
  { id: 2, label: 'Premium Sound System', icon: Speaker },
  { id: 3, label: 'LED Lighting', icon: Lightbulb },
  { id: 4, label: 'Wireless Microphones', icon: Mic2 },
  { id: 5, label: 'Custom Playlists', icon: Music },
  { id: 6, label: 'Wedding Entertainment', icon: PartyPopper },
  { id: 7, label: 'Birthday Parties', icon: Cake },
  { id: 8, label: 'Corporate Events', icon: Briefcase },
];

const DJHighlights = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 text-center border border-brand-secondary/10 hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                  <Icon className="text-brand-accent" size={24} strokeWidth={1.5} />
                </div>
                <h4 className="text-brand-secondary/90 font-body text-sm font-medium tracking-wide">
                  {item.label}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DJHighlights;
