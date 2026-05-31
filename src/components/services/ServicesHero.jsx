import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Gem } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';

const FloatingParticles = () => (
  <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
    {[...Array(35)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1.5 h-1.5 rounded-full bg-brand-accent/80 shadow-[0_0_12px_#7FE7E7]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `svcFloat ${9 + Math.random() * 11}s ease-in-out ${Math.random() * 7}s infinite`,
        }}
      />
    ))}
  </div>
);

const CrystalRibbon = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group scale={0.85}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[2.2, 0.6, 128, 32]} />
          <meshPhysicalMaterial 
            transmission={1}
            opacity={1}
            metalness={0.2}
            roughness={0.1}
            ior={1.5}
            color="#ffffff"
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        {/* Chrome accent wrap */}
        <mesh ref={meshRef} scale={1.01}>
          <torusKnotGeometry args={[2.2, 0.6, 128, 32]} />
          <meshStandardMaterial 
            color="#7FE7E7"
            wireframe
            transparent
            opacity={0.3}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </group>
    </Float>
  );
};

const ServicesHero = () => {
  const containerRef = useRef(null);

  const stagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      ref={containerRef}
      id="services-hero"
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark z-10"
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_rgba(3,59,61,0.35)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(217,214,207,0.04)_0%,transparent_50%)]" />
      </div>

      <FloatingParticles />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-30 text-center pt-32 pb-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto"
        >
          {/* Tag */}
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-brand-secondary/30 text-brand-secondary/90 text-xs md:text-sm tracking-[0.25em] uppercase font-body bg-brand-secondary/5 backdrop-blur-sm shadow-[0_0_15px_rgba(217,214,207,0.08)]">
              <Gem size={14} />
              Premium Wedding & Celebration Services
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-6 leading-none tracking-wider"
            style={{
              color: '#FFFFFF',
              textShadow: '0 0 20px rgba(217, 214, 207, 0.3), 0 0 40px rgba(127, 231, 231, 0.15), 0 0 80px rgba(127, 231, 231, 0.08)',
            }}
          >
            SERVICES
          </motion.h1>

          {/* 3D Sculpture */}
          <motion.div variants={item}>
            <div className="relative w-full h-[300px] md:h-[400px] mx-auto my-8 pointer-events-none">
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} color="#7FE7E7" />
                <directionalLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
                <spotLight position={[0, 10, 0]} intensity={2} angle={0.5} penumbra={1} color="#7FE7E7" />
                <CrystalRibbon />
                <Environment preset="city" />
              </Canvas>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-base md:text-lg lg:text-xl text-brand-secondary/85 font-body max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Elegant services crafted to enhance weddings, celebrations, traditional
            functions, and memorable occasions with creativity and attention to detail.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a
              href="#services-showcase"
              className="px-8 py-4 bg-brand-secondary text-brand-dark rounded-full font-body font-medium uppercase tracking-wider hover:bg-brand-accent hover:shadow-glow transition-all duration-300 w-full sm:w-auto flex items-center justify-center group"
            >
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <Link
              to="/contact"
              className="px-8 py-4 border border-brand-secondary/40 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider hover:border-brand-accent hover:text-brand-accent transition-all duration-300 w-full sm:w-auto glass-card group relative overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-30"
      >
        <span className="text-brand-secondary/50 text-xs uppercase tracking-widest font-body mb-3">
          Scroll to explore
        </span>
        <div className="w-px h-14 bg-brand-secondary/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-accent"
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes svcFloat {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
          50% { transform: translateY(-70px) scale(1.2); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ServicesHero;
