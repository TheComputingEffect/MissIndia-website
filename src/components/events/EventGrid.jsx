import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Music, Sparkles as SparkleIcon, Flame, Star, Gift, Users, HeartHandshake, HelpCircle } from 'lucide-react';

const gridEvents = [
  {
    id: 'weddings',
    title: 'Weddings & Engagements',
    icon: <Star className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80',
    description: 'Unforgettable, luxury wedding planning and custom stage styling designed to perfection.',
    path: '/wedding-engagement-events',
  },
  {
    id: 'dj-services',
    title: 'DJ Services',
    icon: <Music className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
    description: 'Bespoke live musical sets, concert-grade sound rigs, and intelligent venue light setups.',
    path: '/events/dj-services',
  },
  {
    id: 'dance-crew',
    title: 'Dance Crew & Pyros',
    icon: <Flame className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80',
    description: 'Elite synchronized choreography complemented with cold spark blasts and fog fountains.',
    path: '/events/dance-crew',
  },
  {
    id: 'puberty-ceremony',
    title: 'Puberty Ceremonies',
    icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80',
    description: 'Preserving traditional South Indian heritage ceremonies with high-end setups.',
    path: '/puberty-ceremony-events',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower Events',
    icon: <Gift className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    description: 'Playful yet sophisticated theme decors and balloon styles for families and friends.',
    path: '/baby-shower-events',
  },
  {
    id: 'modelling-shoots',
    title: 'Modelling & Brand Shoots',
    icon: <Users className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    description: 'High-fashion model portfolio building and creative social campaigns for brand launches.',
    path: '/collaboration-modelling-shoots',
  },
  {
    id: 'corporate',
    title: 'Corporate Gatherings',
    icon: <HeartHandshake className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    description: 'Polished corporate conferences, brand activations, and executive annual award galas.',
    path: '/corporate-events',
  },
  {
    id: 'surprises',
    title: 'Surprises for Loved Ones',
    icon: <HelpCircle className="w-6 h-6 text-brand-accent" />,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
    description: 'Secret anniversary plans, romantic propose backdrops, and memorable birthday reveals.',
    path: '/surprise-events-for-loved-ones',
  }
];

const EventGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="event-grid" className="relative py-24 lg:py-32 bg-[#011415] z-10 border-t border-brand-secondary/5">
      {/* Glow Backdrops */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-[radial-gradient(circle_at_center,_rgba(127,231,231,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-4 block"
          >
            Premium Overview
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-heading font-bold text-brand-secondary mb-4 uppercase tracking-wider"
          >
            Our Event <span className="text-brand-accent italic font-light">Portfolio</span>
          </motion.h2>
          <div className="w-20 h-0.5 bg-brand-accent mx-auto mt-4" />
        </div>

        {/* 4x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gridEvents.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => navigate(item.path)}
              className="p-6 rounded-2xl glass-card border border-brand-secondary/10 hover:border-brand-accent/50 hover:shadow-glow transition-all duration-500 group cursor-pointer flex flex-col h-full animate-gpu"
            >
              {/* Event Image with zoom effect */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-6 shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Floating Icon inside card */}
                <div className="absolute top-3 right-3 p-2 bg-brand-dark/80 backdrop-blur-sm rounded-full border border-white/10 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500">
                  <div className="group-hover:text-brand-dark transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-brand-secondary mb-3 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-brand-secondary/60 font-body text-xs leading-relaxed mb-6 flex-grow">
                {item.description}
              </p>

              {/* CTA */}
              <div className="flex items-center text-brand-accent font-body text-xs uppercase tracking-widest font-semibold mt-auto group/btn">
                <span className="mr-2 group-hover/btn:mr-3.5 transition-all duration-300">
                  Learn More
                </span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGrid;
