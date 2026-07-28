import React from 'react';
import { ShieldCheck, Sparkles, Clock, UserCheck } from 'lucide-react';

const trustFactors = [
  {
    icon: <UserCheck size={32} className="text-brand-accent" />,
    title: "Professional Service",
    description: "Dedicated expert planners ensuring every detail is executed flawlessly."
  },
  {
    icon: <Sparkles size={32} className="text-brand-accent" />,
    title: "Creative Execution",
    description: "Innovative designs and unique themes tailored specifically to your vision."
  },
  {
    icon: <Clock size={32} className="text-brand-accent" />,
    title: "Timely Delivery",
    description: "Punctual setups and smooth coordination to keep your event on schedule."
  },
  {
    icon: <ShieldCheck size={32} className="text-brand-accent" />,
    title: "Personalized Experiences",
    description: "Custom solutions to match your distinct style, preferences, and requirements."
  }
];

const ClientTrust = () => {
  return (
    <section className="py-24 bg-transparent border-t border-brand-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
            Trusted By Families & Businesses
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/30 text-center transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto bg-brand-primary rounded-full flex items-center justify-center mb-6 shadow-glass">
                {factor.icon}
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-white mb-4">{factor.title}</h3>
              <p className="text-brand-secondary/80 font-body text-base leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTrust;
