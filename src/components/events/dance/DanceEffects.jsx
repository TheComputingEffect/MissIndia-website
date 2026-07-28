import React from 'react';
import { motion } from 'framer-motion';

const effects = [
  { id: 1, title: 'Cold Sparks', desc: 'Safe indoor pyrotechnics' },
  { id: 2, title: 'Pyro Effects', desc: 'High energy blast stage effects' },
  { id: 3, title: 'CO2 Effects', desc: 'Dramatic stage smoke blasts' },
  { id: 4, title: 'Confetti Blast', desc: 'Celebratory moment captures' },
  { id: 5, title: 'LED Lighting', desc: 'Dynamic stage washing' },
  { id: 6, title: 'Smoke Effects', desc: 'Low-lying fog and haze' },
  { id: 7, title: 'Stage Lighting', desc: 'Professional rigging and spots' },
  { id: 8, title: 'Laser Effects', desc: 'Immersive visual spectacles' },
];

const DanceEffects = () => {
  return (
    <section className="py-24 bg-transparent relative z-10 border-y border-brand-secondary/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white tracking-widest uppercase"
          >
            Special <span className="text-orange-400 italic font-light">Effects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {effects.map((fx, i) => (
            <motion.div
              key={fx.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass-card p-6 rounded-xl border border-brand-secondary/10 hover:border-orange-500/50 hover:bg-white/5 transition-all duration-300 text-center"
            >
              <h4 className="text-white font-heading font-bold mb-2 group-hover:text-orange-400">{fx.title}</h4>
              <p className="text-brand-secondary/60 text-xs md:text-sm font-body">{fx.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DanceEffects;
