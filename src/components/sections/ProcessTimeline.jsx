import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CalendarCheck, PenTool, Users, Play, PartyPopper } from 'lucide-react';

const steps = [
  { id: 1, title: 'Consultation', desc: 'Understanding your vision and desires.', icon: MessageSquare },
  { id: 2, title: 'Planning', desc: 'Crafting the master blueprint and timeline.', icon: CalendarCheck },
  { id: 3, title: 'Designing', desc: 'Curating the aesthetics and luxury decor.', icon: PenTool },
  { id: 4, title: 'Vendors', desc: 'Securing premium partners and venues.', icon: Users },
  { id: 5, title: 'Execution', desc: 'Flawless on-site management and setup.', icon: Play },
  { id: 6, title: 'Celebration', desc: 'Experiencing your dream event seamlessly.', icon: PartyPopper },
];

const ProcessTimeline = () => {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary">
            Journey to <span className="text-brand-accent italic font-light">Perfection</span>
          </h2>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-brand-secondary/20 -translate-y-1/2"></div>
          
          {/* Glowing Animated Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-1/2 left-0 w-full h-[2px] bg-brand-accent shadow-glow -translate-y-1/2 z-0"
          ></motion.div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center group w-full lg:w-48"
                >
                  {/* Icon Node */}
                  <div className="w-16 h-16 rounded-full bg-brand-dark border-2 border-brand-secondary/30 flex items-center justify-center text-brand-secondary mb-6 group-hover:border-brand-accent group-hover:text-brand-accent transition-all duration-500 shadow-glass relative group-hover:scale-110 z-10">
                    <div className="absolute inset-0 rounded-full bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500"></div>
                    <Icon size={24} strokeWidth={1.5} className="relative z-10" />
                  </div>
                  
                  {/* Content */}
                  <div className="glass-card p-4 rounded-xl opacity-80 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-500 border border-transparent group-hover:border-brand-accent/30">
                    <span className="text-brand-accent/50 text-xs font-heading font-bold mb-1 block">0{step.id}</span>
                    <h4 className="font-heading text-lg text-white mb-2">{step.title}</h4>
                    <p className="text-brand-secondary/60 font-body text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
