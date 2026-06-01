import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const showcaseEvents = [
  {
    id: 'weddings',
    title: 'Wedding & Engagement Events',
    subtitle: 'Bespoke Love Stories',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85',
    description: 'We orchestrate elegant wedding and engagement celebrations with meticulous attention to detail. From breathtaking stage decor and floral masterpieces to luxury venue coordination, we create seamless, romantic, and awe-inspiring experiences.',
    features: ['Luxury Stage & Venue Styling', 'Custom Floral Architecture', 'Seamless Timeline Coordination', 'Premium Entertainment & Artists'],
    path: '/wedding-engagement-events',
  },
  {
    id: 'dj-services',
    title: 'Premium DJ Services',
    subtitle: 'Symphony of Energy',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=85',
    description: 'Elevate your dance floor with world-class sound, intelligent lighting arrays, and customized live sets. Our professional DJs curate an unforgettable auditory journey tailored perfectly to the pulse of your guests.',
    features: ['High-End Audio Systems', 'Synchronized Intelligent Lighting', 'Bespoke Music Playlists', 'Interactive Crowd Engagement'],
    path: '/events/dj-services',
  },
  {
    id: 'dance-crew',
    title: 'Dance Crew & Pyrotechnics',
    subtitle: 'Cinematic Visual Spectacle',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=85',
    description: 'Create heart-stopping moments with spectacular live dance choreography and cutting-edge stage effects. Cold spark fountains, dense fog clouds, and synchronized pyros deliver a true celebrity-style grand production.',
    features: ['Elite Choreographed Crews', 'Cold Spark Fountains', 'Heavy Dry Ice Fog Effects', 'Synchronized Stage Blasts'],
    path: '/events/dance-crew',
  },
  {
    id: 'puberty-ceremony',
    title: 'Puberty Ceremony Events',
    subtitle: 'Celebrating Sacred Milestones',
    image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=85',
    description: 'Thoughtfully honoring South Indian traditions with a blend of heritage and contemporary luxury. We curate traditional decor, vibrant floral arrangements, grand stage setups, and heartwarming hospitality for your family.',
    features: ['Exquisite Traditional Decor', 'Intricate Floral backdrops', 'Auspicious Ritual Coordination', 'Flawless Guest Hospitality'],
    path: '/puberty-ceremony-events',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower Events',
    subtitle: 'Welcoming New Beginnings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    description: 'Celebrate the upcoming arrival of your bundle of joy with beautiful theme-based styling. We create soft, aesthetic setups featuring elegant pastel floral arrangements, balloon installations, and engaging guest activities.',
    features: ['Customized Theme Decors', 'Elegant Seating & Backdrops', 'Gourmet Dessert Displays', 'Memorable Photography Setups'],
    path: '/baby-shower-events',
  },
  {
    id: 'modelling-shoots',
    title: 'Collaboration & Modelling Shoots',
    subtitle: 'Editorial Visual Storytelling',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85',
    description: 'Transform concepts into stunning visual assets with our commercial fashion shoots, brand launch campaigns, and high-end model portfolio productions. We combine professional lighting with elite styling for exceptional results.',
    features: ['High-Fashion Art Direction', 'Professional Studio & Lighting', 'Model & Styling Curation', 'Commercial-Grade Cinematography'],
    path: '/collaboration-modelling-shoots',
  },
  {
    id: 'corporate',
    title: 'Corporate Events & Galas',
    subtitle: 'Prestige & Execution',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85',
    description: 'Conferences, product launches, networking galas, and corporate awards delivered with high-level sophistication. We manage sophisticated stage setups, high-tech audiovisual elements, and seamless planning for global brands.',
    features: ['Product Launch Production', 'Premium AV & Tech Integration', 'Business Gala Coordination', 'Corporate Brand Activations'],
    path: '/corporate-events',
  },
  {
    id: 'surprises',
    title: 'Surprise Events for Loved Ones',
    subtitle: 'Unscripted Emotional Reveals',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85',
    description: 'Whether it is a breathtaking rooftop marriage proposal, a milestone birthday party, or an anniversary dinner, we handle everything from secret logistics to glowing fairy-lit setups that spark absolute joy.',
    features: ['Secret Proposals & Anniversaries', 'Custom Glowing Signage', 'Fairy-Lit Ambiance Styling', 'Live Instrumental Backdrop'],
    path: '/surprise-events-for-loved-ones',
  }
];

const EventsShowcase = () => {
  return (
    <section id="events-showcase" className="relative py-24 lg:py-32 bg-brand-dark overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[30%] right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.25em] font-body mb-4 block"
          >
            Signature Offerings
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-secondary mb-6 uppercase tracking-wider"
          >
            Interactive <span className="text-brand-accent italic font-light">Showcase</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-secondary/70 font-body text-sm md:text-base leading-relaxed"
          >
            Explore our curated selection of bespoke event management services, engineered to transcend expectations and create lasting luxury impressions.
          </motion.p>
        </div>

        {/* Alternating Showcase List */}
        <div className="flex flex-col space-y-32">
          {showcaseEvents.map((event, index) => {
            const isImageLeft = index % 2 === 0;

            return (
              <div 
                key={event.id}
                id={event.id} 
                className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-12 relative"
              >
                {/* Image Container (70% on desktop) */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8 }}
                  className={`w-full lg:w-[70%] h-[350px] md:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden relative group shadow-glass ${
                    isImageLeft ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1200ms] ease-out"
                  />
                  {/* Subtle dark glass vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-80" />
                  
                  {/* Premium Hover Border */}
                  <div className="absolute inset-0 border-2 border-brand-accent/0 group-hover:border-brand-accent/30 rounded-3xl transition-all duration-500 z-10" />
                </motion.div>

                {/* Content Container (30% on desktop) */}
                <motion.div
                  initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`w-full lg:w-[30%] flex flex-col space-y-6 z-20 ${
                    isImageLeft ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <div className="p-8 lg:p-10 rounded-2xl glass-card border border-brand-secondary/10 hover:border-brand-accent/40 transition-all duration-500 shadow-glass">
                    <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.2em]">
                      {event.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mt-2 mb-4 leading-tight uppercase">
                      {event.title}
                    </h3>
                    <p className="text-brand-secondary/70 font-body text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-3 mb-8">
                      {event.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start text-brand-secondary/85 text-xs font-body leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Action */}
                    <Link
                      to={event.path}
                      className="inline-flex items-center gap-2 py-3.5 px-6 bg-brand-accent/10 border border-brand-accent/30 text-brand-accent rounded-full font-body font-semibold text-xs tracking-wider uppercase hover:bg-brand-accent hover:text-brand-dark transition-all duration-300 w-full justify-center group"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EventsShowcase;
