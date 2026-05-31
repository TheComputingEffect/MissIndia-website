import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Users, Award, Headphones } from 'lucide-react';

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

const reasons = [
  {
    title: 'End-to-End Planning',
    desc: 'From concept to completion, we handle every detail with precision and luxury.',
  },
  {
    title: 'Creative Excellence',
    desc: 'Innovative themes and breathtaking setups that leave lasting impressions.',
  },
  {
    title: 'Premium Vendors',
    desc: 'Exclusive partnerships with top-tier vendors and entertainment professionals.',
  },
  {
    title: 'Flawless Execution',
    desc: 'Meticulous coordination ensuring your event runs smoothly and seamlessly.',
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
            The MISSINDIA Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary"
          >
            Why{' '}
            <span className="text-brand-accent italic font-light">
              MISSINDIA Events
            </span>
          </motion.h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/40 hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-8 h-0.5 bg-brand-accent mb-5 group-hover:w-12 transition-all duration-500" />
                <h4 className="font-heading text-xl text-white mb-3 group-hover:text-brand-accent transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-brand-secondary/70 font-body text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsWhyChoose;
