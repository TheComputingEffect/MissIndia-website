import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: 'How far in advance should we book your services?',
    answer: 'For luxury weddings and large-scale events, we recommend booking 8 to 12 months in advance to ensure availability of premium venues and top-tier vendors. However, we can sometimes accommodate shorter timelines depending on the scale.'
  },
  {
    question: 'Do you offer destination wedding planning?',
    answer: 'Absolutely. We specialize in curating cinematic destination weddings across the globe. Our team handles all logistics, travel arrangements, and local vendor coordination to ensure a seamless experience for you and your guests.'
  },
  {
    question: 'Can you customize a package based on our specific needs?',
    answer: 'Yes, every event is unique. While our packages provide a comprehensive foundation, we take pride in offering fully bespoke planning services tailored exactly to your vision, preferences, and aesthetic requirements.'
  },
  {
    question: 'How do you handle day-of coordination?',
    answer: 'Our dedicated event managers and seasoned coordinators oversee every detail on the day of your event. From vendor setup to timeline execution, we ensure you can relax and immerse yourself entirely in the celebration.'
  }
];

const FAQItem = ({ faq, isOpen, onClick, onMouseEnter }) => {
  return (
    <div className="border-b border-brand-secondary/10">
      <button
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className="w-full flex justify-between items-center py-6 focus:outline-none group text-left"
      >
        <h4 className={clsx(
          "font-heading text-lg md:text-xl transition-colors duration-300 pr-8",
          isOpen ? "text-brand-accent" : "text-brand-secondary group-hover:text-brand-accent/80"
        )}>
          {faq.question}
        </h4>
        <div className={clsx(
          "flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500",
          isOpen ? "border-brand-accent text-brand-accent bg-brand-accent/10" : "border-brand-secondary/20 text-brand-secondary group-hover:border-brand-accent/50"
        )}>
          <ChevronDown size={20} className={clsx("transition-transform duration-500", isOpen ? "rotate-180" : "rotate-0")} />
        </div>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-brand-secondary/70 font-body leading-relaxed pl-2 md:pl-4 border-l-2 border-brand-accent/30 ml-2">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleMouseLeaveContainer = () => {
    if (window.matchMedia('(hover: hover)').matches) {
      setOpenIndex(-1);
    }
  };

  return (
    <section className="relative py-24 z-10">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary mb-6">
            Frequently Asked <span className="text-brand-accent italic font-light">Questions</span>
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card p-8 md:p-12 rounded-3xl"
          onMouseLeave={handleMouseLeaveContainer}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              onMouseEnter={() => {
                if (window.matchMedia('(hover: hover)').matches) {
                  setOpenIndex(index);
                }
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
