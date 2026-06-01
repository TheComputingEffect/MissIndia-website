import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';
import { Briefcase, Star, Sparkles as SparkleIcon, Heart, X, Smile, ShieldCheck, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import NightSkyBackground from '../components/NightSkyBackground';

// 3D NetworkNode Component
const NetworkNode = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
      <group ref={groupRef} scale={window.innerWidth < 768 ? 0.7 : 0.95} position={[0, -0.2, 0]}>
        {/* Core Node */}
        <mesh>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshPhysicalMaterial 
            color="#7FE7E7" 
            metalness={0.9} 
            roughness={0.1} 
            transmission={0.3} 
            ior={1.6}
            envMapIntensity={2} 
          />
        </mesh>
        
        {/* Orbit Node 1 */}
        <mesh position={[2, 0, 0]} scale={0.3}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Orbit Node 2 */}
        <mesh position={[-1.5, 1.2, -0.5]} scale={0.25}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#00FFFF" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Orbit Node 3 */}
        <mesh position={[0.5, -1.6, 1.2]} scale={0.35}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshPhysicalMaterial color="#FFC0CB" metalness={0.7} roughness={0.15} transmission={0.5} />
        </mesh>

        {/* Dynamic Connected Bars */}
        {[...Array(6)].map((_, i) => {
          const rotationAngle = (i * Math.PI) / 3;
          return (
            <mesh 
              key={i} 
              rotation={[rotationAngle, rotationAngle * 0.5, 0.5]}
              position={[0, 0, 0]}
            >
              <torusGeometry args={[1.8, 0.02, 8, 32]} />
              <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
            </mesh>
          );
        })}

        <Sparkles count={45} scale={[3, 3, 3]} size={3.5} color="#7FE7E7" opacity={0.8} speed={0.4} />
      </group>
    </Float>
  );
};

const CorporateEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 1. Overview Section Services (4 cards)
  const services = [
    {
      title: "Product Launch Production",
      description: "Engineering immersive stage setups, smart entry systems, and high-energy product unveil sequences.",
      icon: <Briefcase className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "High-Tech AV Integration",
      description: "Direct control of concert-grade audio arrays, active laser layouts, and pixel-mapped high-definition LED walls.",
      icon: <SparkleIcon className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Business Gala Coordination",
      description: "Executive banquet styling, custom registration portals, scheduling directors, and VIP logistics.",
      icon: <Star className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Corporate Brand Activations",
      description: "Interactive brand booths, multi-city activations, customized promotional kits, and high-impact press setups.",
      icon: <Heart className="w-8 h-8 text-brand-accent" />
    }
  ];

  // 2. Highlights Section (8 cards with highly specific Pinterest-inspired images)
  const highlights = [
    {
      title: "Conference hall",
      description: "Structuring minute-by-minute executive run sheets, vendor timeline logistics, and stage cue sequences.",
      icon: <Briefcase className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
      alt: "Corporate conference hall seating layout and staging visual design"
    },
    {
      title: "Presentation stage",
      description: "Concert-grade sound arrays, presenter headsets, intelligent delay lines, and specialized presenter spotlights.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
      alt: "Business keynote presentation stage with professional high-definition screens"
    },
    {
      title: "Team engagement activities",
      description: "Bespoke stage layouts, modern glassmorphism lobby lounges, and customized branding backdrops.",
      icon: <Star className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
      alt: "Happy team members participating in corporate event activities"
    },
    {
      title: "Award ceremony setup",
      description: "Sourcing verified international artists, acoustic bands, and professional hosts to keep the crowd engaged.",
      icon: <Heart className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
      alt: "Modern annual awards night presentation setup with visual lights"
    },
    {
      title: "Stage Setup & Decoration",
      description: "Polished modern stage structures, corporate award podiums, and multi-screen visual projection layouts.",
      icon: <Star className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
      alt: "Corporate annual meeting product launch stage layout decoration"
    },
    {
      title: "Guest Engagement Activities",
      description: "Live-interactive digital QA panels, customized premium business favors, and instant check-in kiosks.",
      icon: <Smile className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=80",
      alt: "Professional conference guests networking at interactive brand booth"
    },
    {
      title: "Photography & Videography Support",
      description: "Expert media teams capturing executive speaker highlights, media wall photos, and launch recap videos.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
      alt: "Media team capturing professional keynote video with video camera"
    },
    {
      title: "Seamless Event Coordination",
      description: "Expert stage directors managing presenter entries, speaker slides, catering timing, and crowd navigation.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      alt: "Backstage manager coordinate keynote presenter cue schedules"
    }
  ];

  // 3. Why Choose Us Section (5 cards)
  const whyChooseUs = [
    {
      title: "Years of Luxury Experience",
      description: "Specialized in delivering flawless, professional corporate events for international and domestic brands.",
      icon: <Star className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Elite Professional Team",
      description: "Skilled spatial designers, structural planners, corporate coordinators, and audiovisual specialists.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Premium Grade Equipment",
      description: "Ownership of professional-grade audio delays, intelligent lights, truss stages, and LED walls.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Endless Event Customization",
      description: "Tailor-making every lobby lounge, presenter stage, sangeet flow, and logo installation specifically for your brand.",
      icon: <Heart className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "100% Customer Satisfaction",
      description: "Delivering perfect, glitch-free timelines and high corporate praise across all events.",
      icon: <Smile className="w-6 h-6 text-brand-accent" />
    }
  ];

  // 4. Gallery Section (6 highly specific Pinterest-inspired images)
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      alt: "Corporate conference hall staging with glowing blue ambient lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
      alt: "Professional presentation stage setup with high-contrast presentation screens"
    },
    {
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      alt: "Business corporate annual meeting guest seating layout"
    },
    {
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      alt: "Immersive product launch event staging with pixel-mapped lighting"
    },
    {
      src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
      alt: "Elegant corporate awards night podium and staging setup design"
    },
    {
      src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
      alt: "Professional business conference networking lounge glassmorphic backdrop"
    }
  ];

  return (
    <main className="relative overflow-hidden bg-[#021E20]">
      <NightSkyBackground />
      {/* Complete SEO Optimization */}
      <Helmet>
        <title>Corporate Event Management Services | MISS INDIA EVENTS</title>
        <meta name="description" content="Professional Corporate Event Management Services including product launches, conferences, award ceremonies, custom stage setup, premium AV, and complete event coordination." />
        <meta name="keywords" content="Corporate Event Management, Business Gala Planning, Conference Organizers, Coimbatore Corporate Events, Stage Decoration, Professional Event Entertainment, MISS INDIA EVENTS" />
        <link rel="canonical" href="https://missindiaevents.com/corporate-events" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Corporate Event Management Services | MISS INDIA EVENTS" />
        <meta property="og:description" content="Professional Corporate Event Management Services including conferences, product launches, stage setups, high-tech AV, and complete event management." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85" />
        <meta property="og:url" content="https://missindiaevents.com/corporate-events" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Corporate Event Management Services | MISS INDIA EVENTS" />
        <meta name="twitter:description" content="Professional Corporate Event Management Services including conferences, product launches, stage setups, high-tech AV, and complete event management." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85" />

        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "EventPlanningBusiness",
                "@id": "https://missindiaevents.com/#organization",
                "name": "MISS INDIA EVENTS",
                "url": "https://missindiaevents.com",
                "logo": "https://missindiaevents.com/logo.png",
                "description": "Premium luxury event management and entertainment services in Coimbatore.",
                "telephone": "+919843077751",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Avinashi Road",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "TN",
                  "postalCode": "641004",
                  "addressCountry": "IN"
                }
              },
              {
                "@type": "LocalBusiness",
                "name": "MISS INDIA EVENTS - Corporate Events",
                "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85",
                "telephone": "+919843077751",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Avinashi Road",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "TN",
                  "postalCode": "641004",
                  "addressCountry": "IN"
                },
                "priceRange": "$$$"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://missindiaevents.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Events",
                    "item": "https://missindiaevents.com/events"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Corporate Events",
                    "item": "https://missindiaevents.com/corporate-events"
                  }
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section 
        className="hero-section w-full px-6 lg:px-12 pt-32 pb-12 lg:pb-24 relative z-10 flex flex-col lg:flex-row items-center min-h-screen bg-transparent overflow-hidden"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      >
        
        {/* Glowing backdrop lines */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center w-full relative z-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8 mt-12 lg:mt-0 order-2 lg:order-1 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight uppercase tracking-wide">
                Corporate <br/> <span className="text-brand-accent">Events</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-secondary/80 font-heading tracking-wide mt-4 uppercase">
                Prestige, Scale & Flawless Execution
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-secondary/70 font-body text-base md:text-lg max-w-xl leading-relaxed"
            >
              Delivering high-impact corporate galas, award dinners, and product launches with complete technical sophistication, clean scheduling, and dynamic brand activation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="/contact" 
                className="px-8 py-4 bg-brand-accent text-brand-dark font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(127,231,231,0.3)] hover:scale-105"
              >
                Book Now
              </a>
              <a 
                href="#gallery" 
                className="px-8 py-4 border border-brand-secondary/30 text-brand-secondary font-body font-bold text-sm uppercase tracking-widest rounded-full hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card hover:scale-105"
              >
                View Gallery
              </a>
            </motion.div>
          </div>

          {/* Right 3D Scene */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] order-1 lg:order-2 relative z-0 overflow-hidden">
            <Canvas
              camera={{ position: [0, 0, 8], fov: 45 }}
              gl={{ antialias: true, alpha: true }}
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={2} color="#7FE7E7" />
              <directionalLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
              <spotLight position={[0, 10, 0]} intensity={2} angle={0.5} penumbra={1} color="#7FE7E7" />
              
              <NetworkNode />
              
              <Environment preset="city" />
            </Canvas>
          </div>
        </div>
      </section>

      {/* 2. Event Overview Section (Services offered in cards just like DJService) */}
      <section className="container mx-auto px-6 lg:px-12 py-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Event <span className="text-brand-accent">Overview</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-2xl glass-card border border-brand-secondary/10 hover:border-brand-accent/50 transition-colors duration-500 group"
            >
              <div className="mb-6 p-4 bg-brand-dark/50 rounded-full inline-block group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-brand-secondary mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-brand-secondary/60 font-body leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Highlights Section (8 elegant cards matching overview styles with custom zoom images) */}
      <section className="container mx-auto px-6 lg:px-12 py-24 relative z-10 border-t border-brand-secondary/5 bg-brand-dark/20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Gala <span className="text-brand-accent">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((hl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="p-6 rounded-2xl glass-card border border-brand-secondary/10 hover:border-brand-accent/50 hover:shadow-glow transition-all duration-500 group flex flex-col h-full animate-gpu"
            >
              {/* Card Image */}
              <div className="relative h-44 w-full rounded-xl overflow-hidden mb-6 shadow-md">
                <img
                  src={hl.image}
                  alt={hl.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Floating Icon inside card */}
                <div className="absolute top-3 right-3 p-2 bg-brand-dark/80 backdrop-blur-sm rounded-full border border-white/10 group-hover:bg-brand-accent group-hover:border-brand-accent transition-all duration-500">
                  <div className="group-hover:text-brand-dark transition-colors duration-500">
                    {hl.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-brand-secondary mb-3 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-300">
                {hl.title}
              </h3>

              {/* Description */}
              <p className="text-brand-secondary/60 font-body text-xs leading-relaxed flex-grow">
                {hl.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us Section (5 cards layout matching DJService styles) */}
      <section className="container mx-auto px-6 lg:px-12 py-24 relative z-10 border-t border-brand-secondary/5">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Why <span className="text-brand-accent">Choose Us</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="p-6 rounded-2xl glass-card border border-brand-secondary/10 hover:border-brand-accent/40 transition-colors duration-500 group text-center"
            >
              <div className="mb-4 p-3 bg-brand-dark/50 rounded-full inline-block group-hover:scale-110 transition-transform duration-500 text-brand-accent mx-auto">
                {item.icon}
              </div>
              <h3 className="text-sm font-heading font-bold text-brand-secondary mb-3 uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-brand-secondary/60 font-body leading-relaxed text-[11px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Gallery Section (Visual highlights with Lightbox just like DJService) */}
      <section id="gallery" className="container mx-auto px-6 lg:px-12 py-24 relative z-10 border-t border-brand-secondary/5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wider">
            Event <span className="text-brand-accent">Highlights</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-6" />
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx % 3 * 0.1 }}
              className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="p-4 rounded-full bg-brand-accent/20 backdrop-blur-sm border border-brand-accent/50">
                  <ExternalLink className="w-8 h-8 text-brand-accent" />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-brand-accent/0 group-hover:border-brand-accent/50 rounded-2xl transition-all duration-500 z-10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. CTA Section (Book / Contact / WhatsApp matching global styles) */}
      <section className="container mx-auto px-6 lg:px-12 py-24 relative z-10 border-t border-brand-secondary/5 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] border border-brand-secondary/15 relative overflow-hidden group shadow-[0_0_50px_rgba(3,59,61,0.3)]"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 uppercase tracking-wider relative z-10">
            Let's Engineer Your Next <br/><span className="text-brand-accent">Prestigious Event</span>
          </h2>
          <p className="text-brand-secondary/75 font-body text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 relative z-10">
            Get in touch with our team of corporate planners to build a seamless, spectacular product launch or business gala.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300"
            >
              Book Now
            </a>
            <a 
              href="/contact" 
              className="px-8 py-4 border border-brand-secondary/30 text-brand-secondary font-body font-bold text-sm uppercase tracking-widest rounded-full hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card"
            >
              Contact Us
            </a>
            <a 
              href="https://wa.me/919843077751" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-[#25D366] text-white font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-[#20ba5a] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/95 backdrop-blur-xl p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 p-2 text-brand-secondary hover:text-brand-accent transition-colors"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen Highlight"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-brand-accent/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default CorporateEvents;
