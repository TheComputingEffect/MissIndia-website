import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle, ExternalLink, Calendar } from 'lucide-react';
import { db } from '../services/db';
import { useConsultation } from '../utils/ConsultationContext';

const Contact = () => {
  const { openModal } = useConsultation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Wedding & Engagement',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.addContactEnquiry(formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: 'Wedding & Engagement',
        message: ''
      });
    }, 5000);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MISS INDIA EVENTS",
    "telephone": "+91 79045 16541",
    "email": "varshaevents.21@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "72, Brindavan Nagar, PNT Colony, Kavundampalayam",
      "addressLocality": "Coimbatore",
      "postalCode": "641030",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | MISS INDIA EVENTS</title>
        <meta
          name="description"
          content="Get in touch with MISS INDIA EVENTS for luxury event management, weddings, baby showers, corporate events, and celebration planning in Coimbatore."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="bg-brand-dark min-h-screen pt-28 md:pt-36 pb-20 relative flex flex-col justify-center overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-primary/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          
          {/* Header Title */}
          <div className="mb-8 max-w-7xl mx-auto">
            <span className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-2 block">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-brand-secondary/80 font-body text-sm mt-2">
              We are here to turn your dream celebrations into perfection. Click any card to connect directly or fill out the enquiry form.
            </p>
          </div>

          {/* Equal Height Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch max-w-7xl mx-auto">
            
            {/* LEFT SIDE: 4 Square Interactive Clickable Cards (2 per row x 2 rows) */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 h-full">
              
              {/* Card 1: Call Us (Working Redirect Link) */}
              <a 
                href="tel:+917904516541"
                className="glass-card p-5 md:p-6 rounded-2xl border border-brand-secondary/15 hover:border-brand-accent/60 hover:bg-brand-accent/5 transition-all duration-300 flex flex-col justify-between aspect-square group shadow-glass cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                    <Phone size={22} />
                  </div>
                  <ExternalLink size={16} className="text-brand-secondary/40 group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-1 group-hover:text-brand-accent transition-colors">Call Us</h3>
                  <span className="text-brand-accent text-base md:text-lg font-body font-bold tracking-wide block">
                    +91 79045 16541
                  </span>
                  <p className="text-brand-secondary/60 text-xs font-body mt-1">Click to call directly for instant booking</p>
                </div>
              </a>

              {/* Card 2: Email Us (Working Redirect Link) */}
              <a 
                href="mailto:varshaevents.21@gmail.com"
                className="glass-card p-5 md:p-6 rounded-2xl border border-brand-secondary/15 hover:border-brand-accent/60 hover:bg-brand-accent/5 transition-all duration-300 flex flex-col justify-between aspect-square group shadow-glass cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                    <Mail size={22} />
                  </div>
                  <ExternalLink size={16} className="text-brand-secondary/40 group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-1 group-hover:text-brand-accent transition-colors">Email Us</h3>
                  <span className="text-brand-accent text-sm md:text-base font-body font-bold tracking-wide block break-all">
                    varshaevents.21@gmail.com
                  </span>
                  <p className="text-brand-secondary/60 text-xs font-body mt-1">Click to compose quick email</p>
                </div>
              </a>

              {/* Card 3: Visit Us (Working Google Maps Redirect Link) */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=72,+Brindavan+Nagar,+PNT+Colony,+Kavundampalayam,+Coimbatore+641030"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-5 md:p-6 rounded-2xl border border-brand-secondary/15 hover:border-brand-accent/60 hover:bg-brand-accent/5 transition-all duration-300 flex flex-col justify-between aspect-square group shadow-glass cursor-pointer relative overflow-hidden"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                    <MapPin size={22} />
                  </div>
                  <ExternalLink size={16} className="text-brand-secondary/40 group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-1 group-hover:text-brand-accent transition-colors">Visit Us</h3>
                  <p className="text-brand-secondary/90 text-xs md:text-sm font-body leading-relaxed">
                    72, Brindavan Nagar, PNT Colony, Kavundampalayam, Coimbatore – 641030
                  </p>
                  <span className="inline-block mt-1 text-brand-accent text-[11px] font-body uppercase tracking-widest font-semibold">
                    Click to open in Google Maps ➔
                  </span>
                </div>
              </a>

              {/* Card 4: Book Consultation (Working Modal Redirect) */}
              <button 
                onClick={openModal}
                type="button"
                className="glass-card p-5 md:p-6 rounded-2xl border border-brand-secondary/15 hover:border-brand-accent/60 hover:bg-brand-accent/5 transition-all duration-300 flex flex-col justify-between aspect-square group shadow-glass cursor-pointer relative overflow-hidden text-left w-full"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-dark transition-all">
                    <Calendar size={22} />
                  </div>
                  <Clock size={16} className="text-brand-secondary/40 group-hover:text-brand-accent transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wider mb-1 group-hover:text-brand-accent transition-colors">Book Consultation</h3>
                  <p className="text-white text-xs md:text-sm font-body font-semibold">
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                  <p className="text-brand-accent text-xs font-body mt-1 font-medium">
                    Click to schedule meeting ➔
                  </p>
                </div>
              </button>

            </div>

            {/* RIGHT SIDE: Contact Form (Ends on the exact same bottom line as the 2x2 grid) */}
            <div className="lg:col-span-6 glass-card p-6 md:p-8 rounded-3xl border border-brand-secondary/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between h-full">
              <div>
                <div className="mb-5">
                  <h2 className="text-2xl font-heading font-bold text-white uppercase tracking-wide">
                    Send an Enquiry
                  </h2>
                  <p className="text-brand-secondary/70 font-body text-xs mt-1">
                    Fill in your event details below, and our team will connect with you.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-brand-accent/10 border border-brand-accent/30 p-8 rounded-2xl text-center my-6">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto text-brand-accent mb-3">
                      <CheckCircle size={28} />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white mb-1 uppercase">Enquiry Received!</h3>
                    <p className="text-brand-secondary/80 font-body text-xs">
                      Thank you for reaching out to MISS INDIA EVENTS. We will contact you shortly!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Name */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="name" className="text-brand-secondary/80 font-body text-[11px] uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="phone" className="text-brand-secondary/80 font-body text-[11px] uppercase tracking-wider">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="Your phone number"
                          className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Email */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="email" className="text-brand-secondary/80 font-body text-[11px] uppercase tracking-wider">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Your email address"
                          className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30"
                        />
                      </div>

                      {/* Event Type */}
                      <div className="flex flex-col space-y-1">
                        <label htmlFor="eventType" className="text-brand-secondary/80 font-body text-[11px] uppercase tracking-wider">Event Type *</label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-brand-accent font-body transition-colors"
                        >
                          {eventTypes.map((type, idx) => (
                            <option key={idx} value={type} className="bg-brand-dark text-white">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-1">
                      <label htmlFor="message" className="text-brand-secondary/80 font-body text-[11px] uppercase tracking-wider">Message / Details *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        placeholder="Tell us about your event requirements, venue, guest count, or date..."
                        className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-3.5 py-2.5 text-white text-xs focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-brand-accent hover:bg-brand-secondary text-brand-dark font-body font-bold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-glass cursor-pointer mt-2"
                    >
                      <span>Send Enquiry</span>
                      <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
