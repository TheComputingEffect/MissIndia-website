import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles as SparklesIcon } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';
import NightSkyBackground from '../NightSkyBackground';

const FloatingChromeRings = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} scale={window.innerWidth < 768 ? 0.75 : 1} position={[0, -0.2, 0]}>
        {/* Layered luxury rings */}
        {[0, 1, 2].map((i) => (
          <group key={i} rotation-x={i * Math.PI / 3} rotation-y={i * Math.PI / 4}>
            {/* Glass Ring */}
            <mesh>
              <torusGeometry args={[2 + i * 0.6, 0.12, 32, 100]} />
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
            {/* Chrome Accent Wireframe */}
            <mesh scale={1.02}>
              <torusGeometry args={[2 + i * 0.6, 0.12, 32, 100]} />
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
        ))}
        {/* Inner Teal Glow Core */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhysicalMaterial 
            color="#7FE7E7"
            transmission={1}
            opacity={0.6}
            metalness={0.1}
            roughness={0.1}
            ior={1.5}
            envMapIntensity={1}
            clearcoat={1}
          />
        </mesh>
        {/* Glass particles */}
        <Sparkles count={50} scale={8} size={2.5} color="#7FE7E7" opacity={0.8} speed={0.4} />
      </group>
    </Float>
  );
};

const EventsHero = () => {
  return (
    <section 
      className="hero-section w-full px-6 lg:px-12 pt-32 pb-12 lg:pb-24 relative z-10 flex flex-col lg:flex-row items-center min-h-screen bg-brand-dark overflow-hidden"
      style={{ transform: 'translate3d(0, 0, 0)' }}
    >
      <NightSkyBackground />
      
      {/* Subtle luxury glow orbs in the background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center w-full relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 mt-12 lg:mt-0 order-2 lg:order-1 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-4"
          >
            <div>
              <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full border border-brand-accent/30 text-brand-accent text-xs md:text-sm tracking-[0.25em] uppercase font-body bg-brand-accent/5 backdrop-blur-sm shadow-[0_0_20px_rgba(127,231,231,0.15)] mb-6">
                <SparklesIcon size={14} className="animate-pulse text-brand-accent" />
                PREMIUM EVENT EXPERIENCES
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-tight uppercase tracking-wide">
              Crafting <br />
              <span className="text-brand-accent text-glow">Unforgettable</span> <br />
              Celebrations
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-brand-secondary/70 font-body text-base md:text-lg max-w-xl leading-relaxed"
          >
            From weddings and baby showers to corporate gatherings and surprise celebrations, MISS INDIA EVENTS creates memorable experiences tailored to every occasion with creativity, elegance, and flawless execution.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#event-grid" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-body font-bold text-sm uppercase tracking-widest rounded-full hover:bg-brand-accent/90 transition-all duration-300 shadow-[0_0_20px_rgba(127,231,231,0.3)] hover:scale-105"
            >
              Explore Events
            </a>
            <Link 
              to="/contact" 
              className="px-8 py-4 border border-brand-secondary/30 text-brand-secondary font-body font-bold text-sm uppercase tracking-widest rounded-full hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card hover:scale-105"
            >
              Book Consultation
            </Link>
          </motion.div>
        </div>

        {/* Right 3D Scene */}
        <div className="w-full lg:w-1/2 h-[350px] lg:h-[600px] order-1 lg:order-2 relative z-0 overflow-hidden">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={2} color="#7FE7E7" />
            <directionalLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
            <spotLight position={[0, 10, 0]} intensity={2} angle={0.5} penumbra={1} color="#7FE7E7" />
            
            <FloatingChromeRings />
            
            <Environment preset="city" />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default EventsHero;
