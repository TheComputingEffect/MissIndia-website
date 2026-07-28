import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import clsx from 'clsx';

const faqs = [
  {
    question: "What types of events do you manage?",
    answer: "We manage weddings, engagements, baby showers, puberty ceremonies, corporate events, surprise celebrations, brand shoots, and various custom events."
  },
  {
    question: "Can services be customized according to our requirements?",
    answer: "Yes. Every event and service can be tailored to your preferences, theme, budget, and vision."
  },
  {
    question: "Do you provide complete event management solutions?",
    answer: "Yes. We offer end-to-end event planning, coordination, decorations, photography, invitations, gifting solutions, and more."
  },
  {
    question: "How early should we book our event?",
    answer: "We recommend booking as early as possible to ensure availability and allow sufficient planning time."
  },
  {
    question: "Do you handle both personal and corporate events?",
    answer: "Yes. We provide services for personal celebrations as well as professional corporate events."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-secondary/10 pb-5 md:pb-6 mb-5 md:mb-6 last:border-0 last:pb-0 last:mb-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 focus:outline-none group text-left"
      >
        <h4 className={clsx(
          "font-heading font-semibold text-[16px] md:text-[18px] transition-colors duration-300 pr-8",
          isOpen ? "text-brand-accent" : "text-brand-secondary group-hover:text-brand-accent/80"
        )}>
          {faq.question}
        </h4>
        <div className={clsx(
          "flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500",
          isOpen ? "border-brand-accent text-brand-accent bg-brand-accent/10" : "border-brand-secondary/20 text-brand-secondary group-hover:border-brand-accent/50"
        )}>
          <Plus size={20} className={clsx("transition-transform duration-500", isOpen ? "rotate-45" : "rotate-0")} />
        </div>
      </button>
      
      <div 
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="pb-4 text-brand-secondary/70 font-body leading-relaxed text-[16px] md:text-[18px] pl-2 md:pl-4 border-l-2 border-brand-accent/30 ml-2">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const TestimonialsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-brand-primary/40 backdrop-blur-[2px] border-t border-brand-secondary/10">
      <div className="container mx-auto px-6 lg:px-12 w-full md:w-[95%] lg:w-[90%] max-w-[1400px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-secondary mb-6">
            Frequently Asked <span className="text-brand-accent italic font-light">Questions</span>
          </h2>
          <p className="text-brand-secondary/90 font-body text-[16px] md:text-[18px] max-w-3xl mx-auto">
            Everything you need to know about our services and event experiences.
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-3xl w-full mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFAQ;
