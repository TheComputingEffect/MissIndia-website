import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import NightSkyBackground from '../components/NightSkyBackground';

const Contact = () => {
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
    // Simulate API Submission
    console.log('Form Submitted:', formData);
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
    "image": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "telephone": "+91 79045 16541",
    "email": "varshaevents.21@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "72, Brindavan Nagar, PNT Colony, Kavundampalayam",
      "addressLocality": "Coimbatore",
      "postalCode": "641030",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "description": "By Appointment"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Contact MISS INDIA EVENTS | Event Management Services in Coimbatore</title>
        <meta
          name="description"
          content="Get in touch with MISS INDIA EVENTS for weddings, engagements, baby showers, corporate events, decorations, photography, invitations, gifts, and celebration services in Coimbatore."
        />
        <meta
          name="keywords"
          content="MISS INDIA EVENTS, Event Management Coimbatore, Wedding Planner Coimbatore, Contact Event Planner, Photography Services, Wedding Services, Corporate Events, Baby Shower Planning, Event Decorations"
        />
        <meta property="og:title" content="Contact MISS INDIA EVENTS" />
        <meta
          property="og:description"
          content="Connect with MISS INDIA EVENTS for premium event planning and celebration services in Coimbatore."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://missindiaevents.com/contact" />
        <link rel="canonical" href="https://missindiaevents.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="bg-brand-dark min-h-screen relative overflow-hidden">
        <NightSkyBackground />
        {/* Hero Section */}
        <section className="relative flex items-center justify-center bg-gradient-to-b from-brand-primary/30 to-brand-dark/80 pt-36 md:pt-44 lg:pt-52 pb-0">
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <span className="inline-block py-1.5 px-5 rounded-full border border-brand-accent/50 text-brand-accent text-xs md:text-sm tracking-[0.25em] uppercase font-body bg-brand-dark/50 backdrop-blur-sm mb-6">
              LET'S PLAN YOUR NEXT MEMORABLE EVENT
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              CONTACT <span className="text-gradient">US</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-secondary/90 font-body max-w-3xl mx-auto leading-relaxed">
              We're here to help bring your celebrations and special occasions to life. Reach out to us for bookings, inquiries, and customized event solutions.
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="pt-0 pb-16 mt-12 md:mt-14 lg:mt-18 container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
            {/* Phone Card */}
            <div className="glass-card p-8 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/50 transition-colors duration-300 text-center flex flex-col items-center min-h-[220px]">
              <div className="w-12 h-12 rounded-full bg-brand-primary/80 flex items-center justify-center text-brand-accent mb-6 shadow-glass">
                <Phone size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wider">Call Us</h3>
              <a href="tel:+917904516541" className="text-brand-accent hover:text-brand-accent/80 text-lg font-body font-semibold tracking-wide transition-colors">
                +91 79045 16541
              </a>
              <p className="text-brand-secondary/60 text-sm font-body mt-2">Available for bookings & calls</p>
            </div>

            {/* Email Card */}
            <div className="glass-card p-8 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/50 transition-colors duration-300 text-center flex flex-col items-center min-h-[220px]">
              <div className="w-12 h-12 rounded-full bg-brand-primary/80 flex items-center justify-center text-brand-accent mb-6 shadow-glass">
                <Mail size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wider">Email Us</h3>
              <a href="mailto:varshaevents.21@gmail.com" className="text-brand-accent hover:text-brand-accent/80 text-[16px] md:text-lg font-body font-semibold tracking-wide transition-colors break-all">
                varshaevents.21@gmail.com
              </a>
              <p className="text-brand-secondary/60 text-sm font-body mt-2">Get quick email responses</p>
            </div>

            {/* Address Card */}
            <div className="glass-card p-8 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/50 transition-colors duration-300 text-center flex flex-col items-center min-h-[220px]">
              <div className="w-12 h-12 rounded-full bg-brand-primary/80 flex items-center justify-center text-brand-accent mb-6 shadow-glass">
                <MapPin size={22} />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wider">Visit Us</h3>
              <p className="text-brand-secondary/90 text-sm md:text-base font-body leading-relaxed max-w-xs">
                72, Brindavan Nagar, PNT Colony, Kavundampalayam, Coimbatore – 641030
              </p>
              <p className="text-brand-accent text-xs font-body uppercase mt-2 tracking-widest">Tamil Nadu, India</p>
            </div>
          </div>
        </section>

        {/* Main Content split: Form & Hours */}
        <section className="py-12 container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-8 glass-card p-8 md:p-12 rounded-3xl border border-brand-secondary/10">
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold text-white mb-2 uppercase tracking-wide">
                  SEND AN ENQUIRY
                </h2>
                <p className="text-brand-secondary/70 font-body">
                  Fill in your details below, and our luxury event planning consultants will get in touch shortly.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-brand-accent/10 border border-brand-accent/30 p-8 rounded-2xl text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto text-brand-accent mb-4">
                    <Send size={28} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2 uppercase">Enquiry Received</h3>
                  <p className="text-brand-secondary/80 font-body">
                    Thank you for reaching out to MISS INDIA EVENTS. We will connect with you to plan your unforgettable occasion very soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-brand-secondary/80 font-body text-sm uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                        className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="text-brand-secondary/80 font-body text-sm uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your phone number"
                        className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-brand-secondary/80 font-body text-sm uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                        className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30"
                      />
                    </div>

                    {/* Event Type */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="eventType" className="text-brand-secondary/80 font-body text-sm uppercase tracking-wider">Event Type</label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent font-body transition-colors"
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
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-brand-secondary/80 font-body text-sm uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Tell us about your event details and budget requirements..."
                      className="bg-brand-dark/80 border border-brand-secondary/20 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-brand-accent font-body transition-colors placeholder-brand-secondary/30 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-secondary hover:bg-brand-accent text-brand-dark font-body font-bold text-sm uppercase tracking-widest rounded-full transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Send Enquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar: Hours & Details */}
            <div className="lg:col-span-4 flex flex-col space-y-8">
              {/* Business Hours */}
              <div className="glass-card p-8 rounded-3xl border border-brand-secondary/10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/80 flex items-center justify-center text-brand-accent shadow-glass">
                      <Clock size={18} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-wide">
                      Business Hours
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-b border-brand-secondary/10 pb-4">
                      <h4 className="text-brand-accent font-heading text-sm uppercase tracking-widest mb-1">Monday – Saturday</h4>
                      <p className="text-white font-body text-lg font-semibold">9:00 AM – 7:00 PM</p>
                    </div>
                    <div>
                      <h4 className="text-brand-accent font-heading text-sm uppercase tracking-widest mb-1">Sunday</h4>
                      <p className="text-white font-body text-lg font-semibold">By Appointment</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-brand-secondary/10 text-center lg:text-left">
                  <p className="text-brand-secondary/60 text-xs font-body uppercase tracking-wider">Business Name</p>
                  <p className="text-white font-heading font-bold text-xl tracking-wider mt-1">MISS INDIA EVENTS</p>
                </div>
              </div>

              {/* Consultation Info */}
              <div className="glass-card p-8 rounded-3xl border border-brand-secondary/10 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/80 flex items-center justify-center text-brand-accent shadow-glass">
                    <MessageSquare size={18} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white uppercase tracking-wide">
                    Personalized consultation
                  </h3>
                </div>
                <p className="text-brand-secondary/80 font-body text-sm leading-relaxed">
                  Every celebration starts with a personalized discussion. Visit our Coimbatore office or call us to talk directly to event designers who understand how to elevate your special day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card p-4 rounded-3xl border border-brand-secondary/10 overflow-hidden w-full h-[450px]">
              <iframe
                title="MISS INDIA EVENTS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.149176378415!2d76.92985141097241!3d11.027471954436537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85edc153833d7%3A0xe54e6fcbe9a531d0!2sBrindavan%20Nagar%2C%20Kavundampalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641030!5e0!3m2!1sen!2sin!4v1717144933924!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-brand-primary/40 backdrop-blur-[2px] border-t border-brand-secondary/15">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              Ready to Create <span className="text-gradient">Something Extraordinary?</span>
            </h2>
            <p className="text-lg text-brand-secondary/90 font-body mb-10 leading-relaxed max-w-2xl mx-auto">
              Whether it's a wedding, engagement, baby shower, corporate gathering, or special celebration, we're ready to make it unforgettable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="tel:+917904516541" 
                className="px-8 py-4 bg-brand-secondary text-brand-dark rounded-full font-body font-bold text-sm uppercase tracking-widest hover:bg-brand-accent transition-colors duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <a 
                href="#enquiry-form" 
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 border border-brand-secondary/50 text-brand-secondary rounded-full font-body font-bold text-sm uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 w-full sm:w-auto glass-card flex items-center justify-center gap-2"
              >
                <Send size={16} />
                <span>Send Enquiry</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
