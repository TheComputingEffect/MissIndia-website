import React from 'react';
import { motion } from 'framer-motion';

const events = [
  { id: 1, title: 'Wedding Events', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Engagement Events', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Birthday Celebrations', image: 'https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Corporate Events', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Private Parties', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80' },
];

const DJEventTypes = () => {
  return (
    <section className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-heading font-bold text-white tracking-widest uppercase"
          >
            We Play <span className="text-brand-accent italic font-light">For</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-video rounded-2xl overflow-hidden group border border-brand-secondary/10 hover:border-brand-accent/40 hover:shadow-glow transition-all duration-500"
            >
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <h3 className="text-white text-center font-heading text-lg md:text-xl font-bold tracking-widest uppercase group-hover:text-brand-accent transition-colors duration-300">
                  {event.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DJEventTypes;
