import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, OrbitControls } from '@react-three/drei';

const Equalizer = () => {
  const barsRef = useRef();
  
  useFrame((state) => {
    if (barsRef.current) {
      barsRef.current.children.forEach((bar, i) => {
        bar.scale.y = 1 + Math.sin(state.clock.elapsedTime * 5 + i * 0.5) * 1.5;
        bar.position.y = bar.scale.y / 2;
      });
    }
  });

  return (
    <group ref={barsRef} position={[0, -2, -3]}>
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh key={i} position={[(i - 7) * 0.5, 0, 0]}>
          <boxGeometry args={[0.2, 1, 0.2]} />
          <meshStandardMaterial color="#7FE7E7" emissive="#7FE7E7" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
};

const LightBeams = () => {
  const groupRef = useRef();
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[2, 0, 0]} rotation={[0, 0, 0.5]}>
        <cylinderGeometry args={[0.05, 0.5, 10, 16]} />
        <meshBasicMaterial color="#7FE7E7" transparent opacity={0.15} />
      </mesh>
      <mesh position={[-2, 0, 0]} rotation={[0, 0, -0.5]}>
        <cylinderGeometry args={[0.05, 0.5, 10, 16]} />
        <meshBasicMaterial color="#ff4500" transparent opacity={0.15} />
      </mesh>
    </group>
  );
};

const DiscoBall = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.1;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.02; // Music pulse
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.2, 48, 24]} />
        <meshStandardMaterial 
          metalness={1} 
          roughness={0.15} 
          color="#f8fafc" 
          flatShading={true}
          envMapIntensity={2.5}
          emissive="#00151a"
          emissiveIntensity={0.2}
        />
      </mesh>
      <Sparkles count={200} scale={8} size={2} color="#7FE7E7" speed={0.4} opacity={0.6} />
      <Sparkles count={100} scale={10} size={4} color="#D9D6CF" speed={0.2} opacity={0.3} />
    </Float>
  );
};

const DJHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.3em] font-body mb-6 block"
            >
              PREMIUM DJ ENTERTAINMENT
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              DJ <span className="text-brand-secondary italic font-light">SERVICES</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-secondary/80 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              High-energy music, immersive lighting, and unforgettable entertainment for every celebration.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-dark rounded-full font-body font-medium uppercase tracking-wider text-sm hover:bg-white hover:shadow-glow transition-all duration-300"
              >
                Book Now
              </Link>
              <a
                href="#gallery"
                className="w-full sm:w-auto px-8 py-4 border border-brand-secondary/30 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider text-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card"
              >
                View Gallery
              </a>
            </motion.div>
          </div>
          
          {/* Right 3D Canvas */}
          <div className="order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-[600px] relative w-full">
            <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
              <directionalLight position={[-10, -10, -5]} intensity={2} color="#7FE7E7" />
              <pointLight position={[0, -5, 0]} intensity={1} color="#7FE7E7" />
              
              <DiscoBall />
              <Equalizer />
              <LightBeams />
              
              <Environment preset="studio" />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
            </Canvas>
            
            {/* Base Glow */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[60%] h-[20px] bg-brand-accent/30 blur-[30px] rounded-full pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DJHero;
