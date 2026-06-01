import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';
import { CalendarHeart, Star, Sparkles as SparkleIcon, Heart, X, Smile, ShieldCheck, MapPin, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import NightSkyBackground from '../components/NightSkyBackground';

// 3D Romantic Double Rings Component
const DoubleRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={[0, -0.2, 0]} scale={window.innerWidth < 768 ? 0.7 : 0.95}>
        {/* Ring 1 (Gold Glass) */}
        <mesh position={[-0.6, 0, 0]} rotation={[0.5, 0.5, 0]}>
          <torusGeometry args={[1.5, 0.18, 32, 100]} />
          <meshPhysicalMaterial 
            color="#FFD700" 
            metalness={0.9} 
            roughness={0.15} 
            transmission={0.4} 
            ior={1.8} 
            envMapIntensity={2} 
          />
        </mesh>
        
        {/* Ring 2 (Rose Gold / Silver Glass) */}
        <mesh position={[0.6, 0, 0]} rotation={[-0.5, 0.5, 0.2]}>
          <torusGeometry args={[1.5, 0.18, 32, 100]} />
          <meshPhysicalMaterial 
            color="#FFC0CB" 
            metalness={0.8} 
            roughness={0.1} 
            transmission={0.5} 
            ior={1.6} 
            envMapIntensity={2.5} 
          />
        </mesh>

        {/* Heart Sparkle Core */}
        <group position={[0, 0.2, 0]}>
          <Sparkles 
            count={60} 
            scale={[3, 3, 3]} 
            size={3} 
            color="#FF7F50" 
            opacity={0.8} 
            speed={0.5} 
          />
        </group>
      </group>
    </Float>
  );
};

const WeddingEngagementEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 1. Overview Section Services (4 cards)
  const services = [
    {
      title: "Bespoke Stage & Venue Styling",
      description: "Custom-tailored theme decors, grandeur stages, and exquisite entrance arrangements designed to amaze your guests.",
      icon: <Star className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Floral Architecture",
      description: "Masterpieces of fresh floral styling, signature installations, and premium bridal flower designs curated by global experts.",
      icon: <SparkleIcon className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Ceremony Coordination",
      description: "End-to-end planning of rituals, custom lighting, sangeet stages, and celebrity entrance coordination.",
      icon: <CalendarHeart className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Luxury Entertainment & Guest Experience",
      description: "Synchronized live music, celebrity host integrations, VIP hosts, and complete guest logistics management.",
      icon: <Heart className="w-8 h-8 text-brand-accent" />
    }
  ];

  // 2. Highlights Section (8 cards with highly specific Pinterest-inspired images)
  const highlights = [
    {
      title: "Professional Event Planning",
      description: "Dedicated project managers mapping out every detail of your weddings, sangeet, and reception timelines.",
      icon: <CalendarHeart className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80",
      alt: "Professional wedding ceremony planning meeting and timeline blueprint layout"
    },
    {
      title: "Premium Sound & Lighting",
      description: "Concert-grade sound arrays and intelligent light design synchronized perfectly to the energy of your sangeet stage.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80",
      alt: "Luxury wedding reception stage lighting and concert-grade sound setup"
    },
    {
      title: "Customized Event Experience",
      description: "Tailor-made design mockups representing your personal narrative, assuring an absolutely unique atmosphere.",
      icon: <Star className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
      alt: "Customized luxury wedding sangeet setup with personalized thematic details"
    },
    {
      title: "Entertainment Management",
      description: "Booking elite live bands, traditional artists, and high-energy DJs to keep the dance floor vibrant all night.",
      icon: <Heart className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=600&q=80",
      alt: "High-energy wedding stage entertainment management with live musicians"
    },
    {
      title: "Stage Setup & Decoration",
      description: "Grand physical sets, modern glassmorphism drapes, and high-definition LED backdrops for cinematic visuals.",
      icon: <Star className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=600&q=80",
      alt: "Luxury wedding stage decoration setup with beautiful fresh floral installations"
    },
    {
      title: "Guest Engagement Activities",
      description: "Custom photo booths, live interactive guest counters, and tailored keepsakes to maximize overall enjoyment.",
      icon: <Smile className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      alt: "Happy guests interacting at a luxury wedding couple entrance ceremony"
    },
    {
      title: "Photography & Videography Support",
      description: "Partnership coordination with leading cinematic photographers to capture raw, high-definition emotional highlights.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1537907690979-ee8e01276184?auto=format&fit=crop&w=600&q=80",
      alt: "Cinematic wedding photography session capturing romantic couple highlights"
    },
    {
      title: "Seamless Event Coordination",
      description: "Strict backstage orchestration managing vendor schedules, food timing, and VIP guest flows seamlessly.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />,
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600&q=80",
      alt: "Backstage managers coordinate a high-end luxury sangeet event schedule"
    }
  ];

  // 3. Why Choose Us Section (5 cards)
  const whyChooseUs = [
    {
      title: "Years of Luxury Experience",
      description: "Years of planning high-end celebrity weddings, traditional sangeets, and exquisite reception ceremonies.",
      icon: <Star className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Elite Professional Team",
      description: "A highly creative core team of designers, stage engineers, coordinators, and hospitality directors.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Premium Grade Equipment",
      description: "Direct ownership of concert-grade audio arrays, state-of-the-art intelligent lighting, and structures.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Endless Event Customization",
      description: "Every stage, entry concept, sangeet flow, and floral setup is constructed from scratch uniquely for you.",
      icon: <Heart className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "100% Customer Satisfaction",
      description: "An exceptional history of delighted families and flawless reviews validating our commitment.",
      icon: <Smile className="w-6 h-6 text-brand-accent" />
    }
  ];

  // 4. Gallery Section (6 highly specific Pinterest-inspired images)
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury wedding stage decoration floral installation with candles"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
      alt: "South Indian wedding reception stage decoration setup with warm lights"
    },
    {
      src: "https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80",
      alt: "Timeless engagement ceremony setup backdrop with white flowers"
    },
    {
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      alt: "Grand wedding couple entrance with cold sparkler fireworks"
    },
    {
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
      alt: "Luxury wedding sangeet entertainment live music band stage setup"
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      alt: "Aesthetic wedding lighting and sound arrays hanging at reception"
    }
  ];

  return (
    <main className="relative overflow-hidden bg-[#021E20]">
      <NightSkyBackground />
      {/* Complete SEO Optimization */}
      <Helmet>
        <title>Wedding & Engagement Event Services | MISS INDIA EVENTS</title>
        <meta name="description" content="Professional Wedding & Engagement Event Services including DJ entertainment, lighting, custom stage setup, floral architecture, and complete event coordination. Book your event today." />
        <meta name="keywords" content="Wedding Event Services, Engagement Event Planning, Wedding DJ Services, Coimbatore Wedding Planner, Wedding Stage Decoration, Professional Event Entertainment, MISS INDIA EVENTS" />
        <link rel="canonical" href="https://missindiaevents.com/wedding-engagement-events" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Wedding & Engagement Event Services | MISS INDIA EVENTS" />
        <meta property="og:description" content="Professional Wedding & Engagement Event Services including DJ, entertainment, lighting, stage setup, and complete event management." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85" />
        <meta property="og:url" content="https://missindiaevents.com/wedding-engagement-events" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wedding & Engagement Event Services | MISS INDIA EVENTS" />
        <meta name="twitter:description" content="Professional Wedding & Engagement Event Services including DJ, entertainment, lighting, stage setup, and complete event management." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85" />

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
                "name": "MISS INDIA EVENTS - Wedding Planning",
                "image": "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
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
                    "name": "Wedding & Engagement Events",
                    "item": "https://missindiaevents.com/wedding-engagement-events"
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
                Wedding & <br/> <span className="text-brand-accent">Engagement</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-secondary/80 font-heading tracking-wide mt-4 uppercase">
                Bespoke Luxury Love Stories
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-secondary/70 font-body text-base md:text-lg max-w-xl leading-relaxed"
            >
              Orchestrating breathtaking, timeless wedding celebrations custom-tailored to the finest details. From floral architecture and master stage decors to flawless coordination, we guarantee absolute perfection.
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
              
              <DoubleRings />
              
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
            Wedding <span className="text-brand-accent">Highlights</span>
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
            Celebration <span className="text-brand-accent">Highlights</span>
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
            Let's Create Your <br/><span className="text-brand-accent">Dream Wedding</span>
          </h2>
          <p className="text-brand-secondary/75 font-body text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 relative z-10">
            Get in touch with our team of expert event planners to craft an extraordinary celebration of your love story.
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

export default WeddingEngagementEvents;
