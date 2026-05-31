import React from 'react';
import { motion } from 'framer-motion';
import { Users, Flame, PartyPopper, Lightbulb, UserCheck, Star, Briefcase, Sparkles } from 'lucide-react';

const features = [
  { id: 1, label: 'Professional Dance Crew', icon: Users },
  { id: 2, label: 'Wedding Entries', icon: PartyPopper },
  { id: 3, label: 'Reception Performances', icon: Star },
  { id: 4, label: 'Cold Spark Effects', icon: Sparkles },
  { id: 5, label: 'Pyro Blast Effects', icon: Flame },
  { id: 6, label: 'LED Stage Effects', icon: Lightbulb },
  { id: 7, label: 'Custom Choreography', icon: UserCheck },
  { id: 8, label: 'Corporate Shows', icon: Briefcase },
];

const DanceFeatures = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card rounded-2xl p-6 text-center border border-brand-secondary/10 hover:border-orange-500/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="text-orange-400" size={24} strokeWidth={1.5} />
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

export default DanceFeatures;
