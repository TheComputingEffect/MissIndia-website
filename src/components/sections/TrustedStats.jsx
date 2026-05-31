import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

const StatCard = ({ value, label, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration: 2.5,
        ease: "power3.out",
        onUpdate: () => setCount(Math.floor(obj.val))
      });
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="glass-card p-8 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden group border border-brand-secondary/20 hover:border-brand-accent/50 transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-secondary mb-2">
        {count}{suffix}
      </h3>
      <p className="text-brand-secondary/70 font-body text-sm uppercase tracking-widest">
        {label}
      </p>
    </motion.div>
  );
};

const TrustedStats = () => {
  const stats = [
    { value: 500, suffix: '+', label: 'Events' },
    { value: 10, suffix: '+', label: 'Cities' },
    { value: 1000, suffix: '+', label: 'Happy Guests' },
    { value: 5, suffix: ' Yrs', label: 'Experience' },
  ];

  return (
    <section className="relative z-10 -mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedStats;
