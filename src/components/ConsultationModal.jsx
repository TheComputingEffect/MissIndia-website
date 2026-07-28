import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CalendarHeart, CheckCircle } from 'lucide-react';
import { useConsultation } from '../utils/ConsultationContext';
import { db } from '../services/db';

const eventTypes = [
  'Wedding & Engagement',
  'Baby Shower Events',
  'Puberty Ceremony Events',
  'Collaboration & Modelling Shoots',
  'Corporate Events',
  'Surprise Events for Loved Ones',
  'DJ Services',
  'Dance Crew with Pyros & Blast Effects',
  'Saree Draping Services',
  'Other Custom Event'
];

const INITIAL_FORM = {
  name: '',
  phone: '',
  email: '',
  eventType: 'Wedding & Engagement',
  message: ''
};

const ConsultationModal = () => {
  const { isOpen, closeModal } = useConsultation();
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      db.addContactEnquiry(formData);
      setIsLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData(INITIAL_FORM);
        closeModal();
      }, 3500);
    }, 1000);
  };

  const handleClose = () => {
    if (!isLoading) {
      setSubmitted(false);
      setFormData(INITIAL_FORM);
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="consultation-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-xl" />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-dark border border-white/10 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-md"
            onClick={e => e.stopPropagation()}
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/60 to-transparent" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-secondary hover:text-brand-accent hover:border-brand-accent/40 transition-all cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="p-8 md:p-12">
              {submitted ? (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center mb-6">
                    <CheckCircle className="text-brand-accent" size={36} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wider mb-3">
                    Enquiry Received!
                  </h3>
                  <p className="text-brand-secondary/70 font-body text-sm leading-relaxed max-w-sm">
                    Thank you for reaching out to MISS INDIA EVENTS. Our team will connect with you shortly to plan your unforgettable occasion.
                  </p>
                </motion.div>
              ) : (
                /* Form state */
                <>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center">
                      <CalendarHeart className="text-brand-accent" size={18} />
                    </div>
                    <div>
                      <span className="text-brand-accent text-[10px] uppercase tracking-[0.3em] font-body block">
                        Miss India Events
                      </span>
                      <h2 className="text-xl font-heading font-bold text-white uppercase tracking-wide">
                        Book a Consultation
                      </h2>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-brand-secondary/70 font-body text-xs uppercase tracking-wider">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          placeholder="Your full name"
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-accent/60 font-body text-sm transition-colors placeholder-brand-secondary/25"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-brand-secondary/70 font-body text-xs uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          placeholder="Your phone number"
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-accent/60 font-body text-sm transition-colors placeholder-brand-secondary/25"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-brand-secondary/70 font-body text-xs uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          disabled={isLoading}
                          placeholder="Your email"
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-accent/60 font-body text-sm transition-colors placeholder-brand-secondary/25"
                        />
                      </div>

                      {/* Event Type */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="text-brand-secondary/70 font-body text-xs uppercase tracking-wider">
                          Event Type
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          disabled={isLoading}
                          className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-accent/60 font-body text-sm transition-colors"
                        >
                          {eventTypes.map((t, i) => (
                            <option key={i} value={t} className="bg-brand-dark text-white">
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-brand-secondary/70 font-body text-xs uppercase tracking-wider">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        rows={4}
                        placeholder="Tell us about your event..."
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-brand-accent/60 font-body text-sm transition-colors placeholder-brand-secondary/25 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-brand-accent text-brand-dark rounded-xl font-body font-bold text-sm uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(127,231,231,0.5)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationModal;
