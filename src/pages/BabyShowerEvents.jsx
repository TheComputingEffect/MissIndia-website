import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';
import { Gift, Star, Sparkles as SparkleIcon, Heart, X, Smile, ShieldCheck, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import NightSkyBackground from '../components/NightSkyBackground';

// 3D Soft Floating Balloons Component
const FloatingBalloons = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={groupRef} scale={window.innerWidth < 768 ? 0.75 : 1.05}>
        {/* Balloon 1 - Soft Pink Glass */}
        <mesh position={[-0.6, 0.4, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshPhysicalMaterial 
            color="#FFC0CB" 
            metalness={0.1} 
            roughness={0.1} 
            transmission={0.85} 
            ior={1.4}
            thickness={0.5} 
          />
        </mesh>
        
        {/* Balloon 2 - Soft Blue Glass */}
        <mesh position={[0.6, -0.2, 0.5]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshPhysicalMaterial 
            color="#ADD8E6" 
            metalness={0.1} 
            roughness={0.1} 
            transmission={0.85} 
            ior={1.4} 
            thickness={0.5}
          />
        </mesh>

        {/* Balloon 3 - Soft Gold Glass */}
        <mesh position={[0, -0.6, -0.5]}>
          <sphereGeometry args={[0.9, 32, 32]} />
          <meshPhysicalMaterial 
            color="#FFE4B5" 
            metalness={0.3} 
            roughness={0.1} 
            transmission={0.7} 
            ior={1.5}
            thickness={0.5} 
          />
        </mesh>

        <Sparkles count={40} scale={[2.5, 2.5, 2.5]} size={2.5} color="#FFD700" opacity={0.6} speed={0.4} />
      </group>
    </Float>
  );
};

const BabyShowerEvents = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 1. Overview Section Services (4 cards)
  const services = [
    {
      title: "Theme Styling & Decor",
      description: "Luxurious custom backdrops designed with premium pastel color structures, floral accents, and custom letters.",
      icon: <Gift className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Aesthetic Balloon Art",
      description: "Stunning organic balloon arches, matte walls, and Helium clusters curated in beautiful custom color schemes.",
      icon: <SparkleIcon className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Dessert Table Styling",
      description: "Customized premium tier cakes, personalized pastries, color-coordinated macaron towers, and gift favors.",
      icon: <Star className="w-8 h-8 text-brand-accent" />
    },
    {
      title: "Games & Curation",
      description: "Interactive activities for the mother, custom photocorner boxes, sangeet integrations, and complete itineraries.",
      icon: <Heart className="w-8 h-8 text-brand-accent" />
    }
  ];

  // 2. Highlights Section (8 cards with highly specific Pinterest-inspired images)
  const highlights = [
    {
      title: "Baby-themed decoration",
      description: "End-to-end timeline coordination, custom theme designs, invite cards, and menu advice.",
      icon: <Gift className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_stage.png",
      alt: "Teddy bear themed baby shower decoration setup with pastel balloon arch"
    },
    {
      title: "Balloon setup",
      description: "Soft ambient spotlights, warm backlights, and clean sound arrays to broadcast wishes and classic melodies.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_backdrop.png",
      alt: "Premium organic baby shower balloon wall and cloud decoration in pastel shades"
    },
    {
      title: "Family celebration moments",
      description: "Tailoring every physical backdrop element and color palettes to reflect your family's personal story.",
      icon: <Star className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_family.png",
      alt: "Elegant indoor baby shower welcome board and decoration setup detail"
    },
    {
      title: "Gender reveal arrangement",
      description: "Booking high-energy game MCs, acoustic performers, or traditional musicians to elevate the ceremony.",
      icon: <Heart className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_dessert.png",
      alt: "Customized baby shower gender reveal cake and dessert display setup"
    },
    {
      title: "Stage Setup & Decoration",
      description: "Aesthetic pastel seating drapes, customized paper flowers, balloon clouds, and themed photo setups.",
      icon: <Star className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_stage.png",
      alt: "Mom-to-be stage setup and elegant seating arrangement decoration"
    },
    {
      title: "Guest Engagement Activities",
      description: "Fun baby-prediction game cards, custom balloon-wish maps, and premium personalized take-home gifts.",
      icon: <Smile className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_welcome.png",
      alt: "Baby shower gifts and personalized favor boxes welcome board entrance"
    },
    {
      title: "Photography & Videography Support",
      description: "Arranging highly professional cinematic shoots, family portraits, and candid expressions capturing warm love.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_family.png",
      alt: "Professional baby shower photography capturing candid family moments and baby shoes details"
    },
    {
      title: "Seamless Event Coordination",
      description: "Complete vendor scheduling, backstage coordinate, catering coordination, and guest hospitality management.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />,
      image: "/images/baby_shower_stage.png",
      alt: "Coordinating premium catering and baby shower hospitality logistics"
    }
  ];

  // 3. Why Choose Us Section (5 cards)
  const whyChooseUs = [
    {
      title: "Years of Luxury Experience",
      description: "Specialized in planning aesthetic, premium theme-based baby showers for leading families in Coimbatore.",
      icon: <Star className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Elite Professional Team",
      description: "Talented spatial designers and coordinators focused on delicate details and warm experiences.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Premium Grade Equipment",
      description: "Beautiful clean stages, premium lighting equipment, and high-quality customized pastel decors.",
      icon: <SparkleIcon className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "Endless Event Customization",
      description: "We build original balloon structures and backdrops to ensure your event feels completely personal.",
      icon: <Heart className="w-6 h-6 text-brand-accent" />
    },
    {
      title: "100% Customer Satisfaction",
      description: "Direct focus on providing a stress-free, beautiful day for parents and a highly photogenic atmosphere.",
      icon: <Smile className="w-6 h-6 text-brand-accent" />
    }
  ];

  // 4. Gallery Section (6 highly specific Pinterest-inspired images)
  const galleryImages = [
    {
      src: "/images/baby_shower_stage.png",
      alt: "Luxury teddy bear themed baby shower decoration setup in pastel balloon arches"
    },
    {
      src: "/images/baby_shower_backdrop.png",
      alt: "Delicate baby shower backdrop welcome board and floral decor"
    },
    {
      src: "/images/baby_shower_dessert.png",
      alt: "Elegant baby shower dessert table setup with custom tier cake"
    },
    {
      src: "/images/baby_shower_welcome.png",
      alt: "Customized baby shower favor gifts welcome sign entry board setup"
    },
    {
      src: "/images/baby_shower_family.png",
      alt: "Mom-to-be stage setup and pastel family seating arrangement decoration"
    },
    {
      src: "/images/baby_shower_backdrop.png",
      alt: "Elegant baby shower event balloon cloud backdrop installation"
    }
  ];

  return (
    <main className="relative overflow-hidden bg-[#021E20]">
      <NightSkyBackground />
      {/* Complete SEO Optimization */}
      <Helmet>
        <title>Baby Shower Event Planning Services | MISS INDIA EVENTS</title>
        <meta name="description" content="Professional Baby Shower Event Services including balloon decors, custom stage setup, dessert tables, and complete event coordination. Book your event today." />
        <meta name="keywords" content="Baby Shower Event Organizers, Theme Event Planning, Balloon Wall Decoration, Coimbatore Baby Shower, Stage Decoration, Professional Event Entertainment, MISS INDIA EVENTS" />
        <link rel="canonical" href="https://missindiaevents.com/baby-shower-events" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Baby Shower Event Planning Services | MISS INDIA EVENTS" />
        <meta property="og:description" content="Professional Baby Shower Event Services including theme decorations, dessert tables, stage setup, and complete event management." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85" />
        <meta property="og:url" content="https://missindiaevents.com/baby-shower-events" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Baby Shower Event Planning Services | MISS INDIA EVENTS" />
        <meta name="twitter:description" content="Professional Baby Shower Event Services including theme decorations, dessert tables, stage setup, and complete event management." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85" />

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
                "name": "MISS INDIA EVENTS - Baby Showers",
                "image": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
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
                    "name": "Baby Shower Events",
                    "item": "https://missindiaevents.com/baby-shower-events"
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
                Baby Shower <br/> <span className="text-brand-accent">Events</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-secondary/80 font-heading tracking-wide mt-4 uppercase">
                Welcoming Beautiful New Beginnings
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-secondary/70 font-body text-base md:text-lg max-w-xl leading-relaxed"
            >
              Celebrate the upcoming arrival of your bundle of joy with beautiful theme-based styling. We create soft, aesthetic setups featuring elegant pastel floral arrangements, balloon installations, and engaging guest activities.
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
              
              <FloatingBalloons />
              
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
            Baby Shower <span className="text-brand-accent">Highlights</span>
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
            Let's Style A Magical <br/><span className="text-brand-accent">Baby Shower</span>
          </h2>
          <p className="text-brand-secondary/75 font-body text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-10 relative z-10">
            Get in touch with our team of expert creators to design an adorable, beautiful backdrop setup that everyone will love.
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

export default BabyShowerEvents;
