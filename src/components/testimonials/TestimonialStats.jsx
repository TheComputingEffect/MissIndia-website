import React from 'react';
import { Heart, Trophy, Users, Briefcase } from 'lucide-react';

const stats = [
  {
    icon: <Trophy size={32} className="text-brand-accent" />,
    value: "500+",
    label: "Successful Events"
  },
  {
    icon: <Heart size={32} className="text-brand-accent" />,
    value: "98%",
    label: "Client Satisfaction"
  },
  {
    icon: <Users size={32} className="text-brand-accent" />,
    value: "300+",
    label: "Happy Families"
  },
  {
    icon: <Briefcase size={32} className="text-brand-accent" />,
    value: "150+",
    label: "Corporate Clients"
  }
];

const TestimonialStats = () => {
  return (
    <section className="py-20 bg-brand-primary/40 backdrop-blur-[2px] border-y border-brand-secondary/10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-brand-dark border border-brand-secondary/20 rounded-2xl flex items-center justify-center mb-6 shadow-glass">
                <div>
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-brand-secondary/80 font-body uppercase tracking-wider text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialStats;
