import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, 
  Award, 
  Users, 
  Headphones, 
  Sparkles, 
  Network, 
  Palette, 
  Clock, 
  Crown, 
  HeartHandshake 
} from 'lucide-react';

const stats = [
  { id: 1, label: 'Events Executed', value: 500, suffix: '+', icon: Calendar },
  { id: 2, label: 'Client Satisfaction', value: 100, suffix: '%', icon: Award },
  { id: 3, label: 'Professional Artists', value: 50, suffix: '+', icon: Users },
  { id: 4, label: 'Event Support', value: 24, suffix: '/7', icon: Headphones },
];

const AnimatedCounter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="text-4xl md:text-5xl font-heading font-bold text-white text-glow">
      {count}
      {suffix}
    </span>
  );
};

const trustCards = [
  {
    title: 'Personalized Planning',
    desc: 'Customized timelines, bespoke designs, and tailor-made concepts that reflect your unique style and vision.',
    icon: <Sparkles className="w-6 h-6 text-brand-accent" />,
  },
  {
    title: 'Premium Vendor Network',
    desc: 'Direct access to top-tier caterers, decorators, visual production teams, and premium entertainment artists.',
    icon: <Network className="w-6 h-6 text-brand-accent" />,
  },
  {
    title: 'Creative Event Concepts',
    desc: 'Innovative themes, breathtaking stage setups, and immersive atmospheres designed to wow your guests.',
    icon: <Palette className="w-6 h-6 text-brand-accent" />,
  },
  {
    title: 'Professional Coordination',
    desc: 'Flawless logistics, timeline management, and on-site directors ensuring everything goes exactly as planned.',
    icon: <Clock className="w-6 h-6 text-brand-accent" />,
  },
  {
    title: 'Luxury Event Execution',
    desc: 'Attention to the finest details, premium materials, and high-end visual and auditory productions.',
    icon: <Crown className="w-6 h-6 text-brand-accent" />,
  },
  {
    title: 'Seamless Guest Experience',
    desc: 'From arrival to departure, we ensure your guests enjoy a comfortable, engaging, and memorable celebration.',
    icon: <HeartHandshake className="w-6 h-6 text-brand-accent" />,
  },
];

const EventsWhyChoose = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="events-why-choose"
      className="relative py-24 md:py-32 z-10 bg-brand-dark/50 border-y border-brand-secondary/5"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-[radial-gradient(ellipse_at_center,_rgba(127,231,231,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-4 block"
          >
            The MISSINDIA Standard
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary uppercase tracking-wider"
          >
            Why Clients Trust{' '}
            <span className="text-brand-accent italic font-light">
              MISS INDIA EVENTS
            </span>
          </motion.h2>
          <div className="w-24 h-0.5 bg-brand-accent mx-auto mt-6" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 md:p-8 text-center border border-brand-secondary/10 hover:border-brand-accent/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-500">
                  <Icon
                    size={22}
                    className="text-brand-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={isInView}
                />
                <p className="text-brand-secondary/60 font-body text-xs md:text-sm uppercase tracking-wider mt-2">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="glass-card p-8 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-brand-dark/50 border border-brand-secondary/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:border-brand-accent group-hover:shadow-glow transition-all duration-500">
                <div className="group-hover:text-brand-dark transition-colors duration-500">
                  {card.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h4 className="font-heading text-xl text-white mb-3 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-300">
                {card.title}
              </h4>
              <p className="text-brand-secondary/70 font-body text-sm leading-relaxed flex-grow">
                {card.desc}
              </p>

              {/* Decorative Accent Line */}
              <div className="w-8 h-0.5 bg-brand-accent mt-6 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsWhyChoose;
