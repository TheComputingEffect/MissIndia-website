import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users, Heart, Target, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import varshaImg from '../assets/varsha.jpeg';
import { useConsultation } from '../utils/ConsultationContext';

const About = () => {
  const { openModal } = useConsultation();
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const teamStats = [
    { label: "Bespoke Celebrations", value: "150+" },
    { label: "Women-Led Team Ratio", value: "85%" },
    { label: "Years of Design Artistry", value: "5+" },
    { label: "Delighted Clients", value: "100%" }
  ];

  const coreValues = [
    {
      icon: <Award className="text-brand-accent" size={24} />,
      title: "Bespoke Artistry",
      desc: "Every concept is tailored from scratch. We refuse cookie-cutter blueprints and focus on hyper-personalized styling."
    },
    {
      icon: <Users className="text-brand-accent" size={24} />,
      title: "Women Empowerment",
      desc: "Building a supportive ecosystem by employing, mentoring, and collaborating with aspiring female creatives and vendors."
    },
    {
      icon: <Target className="text-brand-accent" size={24} />,
      title: "Uncompromising Precision",
      desc: "From standard vendor alignment to structural audio-visual design, we execute with meticulous attention to detail."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Women Entrepreneurship Journey | MISSINDIA</title>
        <meta
          name="description"
          content="Learn about the journey of Varsha, the woman entrepreneur behind MISSINDIA. We design luxury events, weddings, and premium corporate celebrations in Coimbatore."
        />
        <meta
          name="keywords"
          content="Varsha Events, Miss India Events, Women Entrepreneur Coimbatore, Event Planner Coimbatore, Luxury Wedding Planner Coimbatore, About Miss India Events"
        />
      </Helmet>

      <main className="bg-brand-dark min-h-screen relative overflow-hidden w-full">
        {/* 1. Hero Section */}
        <section className="relative flex items-center justify-center bg-gradient-to-b from-brand-primary/30 to-brand-dark/80 pt-36 md:pt-44 lg:pt-52 pb-20">
          <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              className="max-w-4xl mx-auto"
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-block py-1.5 px-5 rounded-full border border-brand-accent/50 text-brand-accent text-xs md:text-sm tracking-[0.25em] uppercase font-body bg-brand-dark/50 backdrop-blur-sm mb-6"
              >
                OUR FOUNDING STORY
              </motion.span>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-7xl font-heading font-bold text-white mb-8 uppercase tracking-wider leading-tight"
              >
                EMPOWERING CELEBRATIONS, <span className="text-gradient block mt-2">REDEFINING LUXURY</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-brand-secondary/80 font-body max-w-3xl mx-auto leading-relaxed"
              >
                Meet the visionary drive behind MISSINDIA — pioneering female-led creativity and luxury event architecture in South India.
              </motion.p>
              
              <motion.div
                variants={fadeInUp}
                className="w-px h-16 bg-gradient-to-b from-brand-accent to-transparent mx-auto mt-12 animate-pulse"
              />
            </motion.div>
          </div>
        </section>

        {/* 2. Journey Section (Varsha's Story) */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl mx-auto">
              
              {/* Left Side: Photo & Floating Badge */}
              <div className="lg:col-span-5 relative flex justify-center">
                {/* Decorative Glowing Backdrop */}
                <div className="absolute inset-0 bg-radial-gradient from-brand-accent/20 to-transparent opacity-60 blur-3xl -z-10" />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative max-w-sm w-full rounded-2xl overflow-hidden border-2 border-brand-secondary/30 shadow-glass group hover:border-brand-accent/50 transition-colors duration-500"
                >
                  <img 
                    src={varshaImg} 
                    alt="Varsha - Founder of MISSINDIA" 
                    className="w-full h-auto object-cover aspect-[4/5] object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                  {/* Decorative Frame */}
                  <div className="absolute inset-0 border border-brand-accent/20 rounded-2xl m-3 pointer-events-none z-10" />
                  
                  {/* Text Overlay for portrait */}
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent pt-16 z-10">
                    <h3 className="text-xl font-heading font-bold text-white tracking-wide">VARSHA</h3>
                    <p className="text-brand-accent text-xs uppercase tracking-widest font-body mt-1">Founder & Creative Director</p>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="absolute -bottom-6 right-0 lg:-right-6 bg-brand-primary/90 backdrop-blur-md border border-brand-secondary/20 p-5 rounded-xl shadow-glass flex items-center gap-4 max-w-xs z-20"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold font-body leading-tight">Women-led Business</p>
                    <p className="text-brand-secondary/70 text-xs font-body mt-0.5">Empowering local artisans & female creators</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Side: Narrative Story */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body block font-medium">The Journey</span>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight uppercase">
                    From Passion to <span className="text-gradient">Industry Leadership</span>
                  </h2>
                  
                  <div className="space-y-6 text-brand-secondary/80 font-body text-base md:text-lg leading-relaxed">
                    <p>
                      In 2019, <strong>Varsha</strong> founded MISSINDIA in Coimbatore with a singular, clear vision: to introduce a fresh, sophisticated, and deeply personalized approach to the luxury event planning industry. 
                    </p>
                    <p>
                      Navigating the complex and highly competitive event production market, she broke standard industry molds. She focused not just on venue setup, but on curating sensory emotional experiences—integrating custom stage setups, high-fidelity acoustics, bespoke lighting arrays, and meticulous choreography.
                    </p>
                    <p>
                      As a woman entrepreneur, Varsha faced standard barriers. However, by establishing a signature standard for visual artistry, she quickly gained the trust of high-profile clients. Today, MISSINDIA stands as a premier luxury event name, having orchestrated over 150 elite weddings, baby showers, puberty ceremonies, and corporate galas.
                    </p>
                    <p className="border-l-4 border-brand-accent pl-4 italic text-white/90 bg-brand-primary/20 py-3 rounded-r-lg font-light text-base">
                      "We don't merely plan milestones. We build temporary cathedrals of celebration, making sure every detail reflects the client's soul and our absolute dedication to perfection." — Varsha
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Key Stats Grid */}
        <section className="py-16 relative z-10 border-y border-brand-secondary/10 bg-brand-primary/10">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {teamStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-6xl font-heading font-bold text-brand-accent mb-2 text-glow">{stat.value}</p>
                  <p className="text-brand-secondary/70 text-xs md:text-sm uppercase tracking-widest font-body">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Pillars / Values */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <span className="text-brand-accent text-sm uppercase tracking-[0.2em] font-body mb-4 block">Pillars of Excellence</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase">How We Design Differently</h2>
              <p className="text-brand-secondary/70 font-body text-base md:text-lg">
                We construct our luxury celebrations around distinct design values that prioritize creativity, inclusivity, and technical coordination.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="glass-card p-8 md:p-10 rounded-2xl border border-brand-secondary/10 hover:border-brand-accent/40 transition-colors duration-500 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-full bg-brand-primary/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glass">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white mb-4 uppercase tracking-wider">{value.title}</h3>
                    <p className="text-brand-secondary/70 font-body text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Empowering Women In Business (Focus Banner) */}
        <section className="py-20 relative z-10 bg-brand-primary/20 backdrop-blur-[2px] border-t border-brand-secondary/15">
          <div className="container mx-auto px-6 lg:px-12 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center mx-auto text-brand-accent mb-4">
                <Heart size={24} />
              </div>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-white uppercase tracking-wider">
                Fostering Female Leadership
              </h2>
              <p className="text-base md:text-lg text-brand-secondary/85 font-body leading-relaxed max-w-2xl mx-auto">
                We actively build opportunities for female floral designers, stage architects, and logistics coordinators. By standardizing gender inclusivity in event planning, MISSINDIA works towards a balanced and creative entrepreneurial ecosystem in Coimbatore.
              </p>
            </motion.div>
          </div>
        </section>

        {/* 6. Call to Action */}
        <section className="py-24 relative z-10 bg-gradient-to-t from-brand-dark to-brand-primary/30 text-center border-t border-brand-secondary/10">
          <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
              Experience the <span className="text-gradient">Art of Luxury</span>
            </h2>
            <p className="text-lg text-brand-secondary/75 font-body mb-10 leading-relaxed">
              Let's craft your next dream celebration together. Talk to our designers and discover what makes us Coimbatore's signature name.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={openModal} 
                className="px-8 py-4 bg-brand-secondary text-brand-dark rounded-full font-body font-bold text-sm uppercase tracking-widest hover:bg-brand-accent transition-colors duration-300 w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Consultation</span>
                <ArrowRight size={16} />
              </button>
              <Link 
                to="/services" 
                className="px-8 py-4 border border-brand-secondary/50 text-brand-secondary rounded-full font-body font-bold text-sm uppercase tracking-widest hover:border-brand-accent hover:text-brand-accent transition-colors duration-300 w-full sm:w-auto glass-card"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
