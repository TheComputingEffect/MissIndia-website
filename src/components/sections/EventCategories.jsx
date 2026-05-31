import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const categories = [
  {
    id: 1,
    title: 'Weddings',
    description: 'Bespoke luxury wedding planning and cinematic experiences.',
    images: [
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    ]
  },
  {
    id: 2,
    title: 'Corporate',
    description: 'High-end corporate gatherings, galas, and brand reveals.',
    images: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    ]
  },
  {
    id: 3,
    title: 'Milestones',
    description: 'Extravagant birthday celebrations and baby showers.',
    images: [
      'https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    ]
  },
  {
    id: 4,
    title: 'Engagements',
    description: 'Intimate, romantic, and beautifully curated setups.',
    images: [
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    ]
  }
];

const SegmentedDisc = ({ images, isHovered }) => {
  const discRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const animation = gsap.to(discRef.current, {
      rotation: 360,
      duration: 35,
      repeat: -1,
      ease: "none"
    });
    return () => animation.kill();
  }, []);

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % 3);
      }, 1800);
    } else {
      setActiveIndex(-1);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div 
      ref={discRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full overflow-hidden shadow-[0_0_30px_rgba(127,231,231,0.4)] bg-brand-dark border-[3px] border-[#c0c0c0]"
    >
      {[0, 1, 2].map((index) => {
        const rotation = index * 120;
        const isActive = index === activeIndex;
        
        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(50% 50%, -36.6% 0%, 136.6% 0%)',
              transform: `rotate(${rotation}deg)`,
              transformOrigin: '50% 50%',
            }}
          >
            <div className="absolute inset-0 w-full h-full">
              <motion.img 
                src={images[index]}
                alt={`Segment ${index + 1}`}
                initial={{ scale: 1.05 }}
                animate={{ scale: isActive ? 1.18 : 1.05 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                style={{
                  transform: `rotate(${-rotation}deg)`,
                  transformOrigin: '50% 50%'
                }}
              />
              <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay"></div>
              <div className="absolute left-1/2 top-0 bottom-1/2 w-[1px] bg-white/50 -translate-x-1/2"></div>
            </div>
          </div>
        );
      })}
      
      {/* Center Record Hole */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-brand-dark border-[5px] border-[#c0c0c0] z-20 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
        <div className="w-5 h-5 rounded-full bg-brand-dark shadow-[inset_0_0_10px_rgba(0,0,0,1)]"></div>
      </div>
      
      {/* Reflections */}
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.3)_45deg,transparent_90deg,transparent_180deg,rgba(255,255,255,0.3)_225deg,transparent_270deg)] mix-blend-overlay pointer-events-none z-30"></div>
    </div>
  );
};

const CustomCDPouch = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    gsap.to(containerRef.current, {
      rotateY: ((x - centerX) / centerX) * 5,
      rotateX: -((y - centerY) / centerY) * 5,
      duration: 0.5,
      ease: "power2.out",
      transformPerspective: 1000
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(containerRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 1.2,
      ease: "power3.out"
    });
  };

  const isLeftColumn = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={clsx(
        "w-full relative py-8 flex",
        isLeftColumn ? "justify-start md:pl-12" : "justify-center md:justify-end md:pr-12 lg:pr-24"
      )}
    >
      <div 
        ref={containerRef}
        className="relative w-full max-w-[320px] md:max-w-[360px] aspect-square cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {/* Disc Clipping Wrapper: Ensures disc NEVER shows top, bottom, or left */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none" 
          style={{ clipPath: 'inset(0 -100% 0 0 round 0.75rem 0 0 0.75rem)' }}
        >
          {/* Disc Container - Slides purely horizontally */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ x: '15%' }}
            animate={{ 
              x: isHovered ? '65%' : '15%',
              scale: isHovered ? 0.95 : 0.92
            }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.div 
              className="absolute inset-0 rounded-full bg-brand-accent/30 blur-[50px]"
              animate={{ opacity: isHovered ? 0.9 : 0 }}
              transition={{ duration: 1 }}
            />
            <SegmentedDisc images={category.images} isHovered={isHovered} />
          </motion.div>
        </div>

        {/* Luminous Glass-Metal Pouch Front Cover */}
        <motion.div 
          className="absolute inset-0 z-10 rounded-xl overflow-hidden flex flex-col justify-between p-8 backdrop-blur-xl"
          style={{ 
            borderRight: '3px solid #D9D6CF', 
            borderLeft: '1px solid rgba(217, 214, 207, 0.4)',
            borderTop: '1px solid rgba(217, 214, 207, 0.5)',
            borderBottom: '1px solid rgba(217, 214, 207, 0.2)'
          }}
          animate={{
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(217, 214, 207, 0.15) 0%, rgba(127, 231, 231, 0.12) 100%)' 
              : 'linear-gradient(135deg, rgba(217, 214, 207, 0.08) 0%, rgba(127, 231, 231, 0.04) 100%)',
            boxShadow: isHovered 
              ? 'inset 0 0 40px rgba(127,231,231,0.25), inset 1px 1px 5px rgba(255,255,255,0.6), 0 20px 50px rgba(127,231,231,0.15)' 
              : 'inset 0 0 25px rgba(127,231,231,0.1), inset 1px 1px 3px rgba(255,255,255,0.4), 0 15px 40px rgba(0,0,0,0.5)',
            borderColor: isHovered ? 'rgba(127, 231, 231, 0.6)' : 'rgba(217, 214, 207, 0.4)'
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.25] pointer-events-none mix-blend-overlay"></div>
          
          {/* Edge Glow */}
          <motion.div 
            className="absolute top-0 right-0 bottom-0 w-8 pointer-events-none z-10"
            animate={{
              background: isHovered 
                ? 'linear-gradient(to left, rgba(127,231,231,0.25), transparent)' 
                : 'linear-gradient(to left, rgba(217,214,207,0.15), transparent)',
              boxShadow: isHovered
                ? 'inset -4px 0 15px rgba(127,231,231,0.5)'
                : 'inset -2px 0 10px rgba(217,214,207,0.3)'
            }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          {/* Light Sweep */}
          <motion.div 
            className="absolute -inset-full bg-gradient-to-tr from-transparent via-[#D9D6CF]/30 to-transparent pointer-events-none origin-center blur-sm"
            animate={{ rotate: isHovered ? 65 : 15, x: isHovered ? '70%' : '-70%' }}
            transition={{ duration: 1.5, ease: "power2.out" }}
          ></motion.div>

          <div className="relative z-20">
            <motion.span 
              className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 block"
              animate={{ color: isHovered ? '#7FE7E7' : '#D9D6CF' }}
              transition={{ duration: 0.8 }}
            >
              Vol. 0{index + 1}
            </motion.span>
            <motion.h3 
              className="text-3xl md:text-4xl font-heading font-bold tracking-wide leading-tight"
              animate={{ 
                color: isHovered ? '#FFFFFF' : '#D9D6CF',
                textShadow: isHovered ? '0 0 15px rgba(127,231,231,0.4)' : '0 0 0px rgba(0,0,0,0)'
              }}
              transition={{ duration: 0.8 }}
            >
              {category.title}
            </motion.h3>
          </div>

          <div className="relative z-20">
            <p className="text-brand-secondary/80 font-body text-xs md:text-sm leading-relaxed mb-6 max-w-[200px]">
              {category.description}
            </p>
            <motion.div 
              className="flex items-center font-body text-[10px] md:text-xs uppercase tracking-[0.2em] group/btn w-fit"
              animate={{ color: isHovered ? '#7FE7E7' : '#D9D6CF' }}
              transition={{ duration: 0.8 }}
            >
              <span className="mr-3 group-hover/btn:mr-4 transition-all duration-300">Uncover</span>
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const EventCategories = () => {
  return (
    <section className="relative py-24 md:py-32 z-10 overflow-hidden bg-[#011415]">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-secondary/5 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.2em] font-body mb-4 block">Our Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-secondary mb-6">
            Signature <span className="text-brand-accent italic font-light">Experiences</span>
          </h2>
          <p className="text-brand-secondary/70 font-body text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Discover our curated portfolio of luxury celebrations, presented as immersive collectible discs. Hover to reveal the artistry within.
          </p>
        </div>

        {/* Spacious 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-32 gap-y-16 lg:gap-y-24 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <CustomCDPouch key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCategories;
