import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, OrbitControls, useHelper } from '@react-three/drei';
import * as THREE from 'three';

const AbstractDancer = () => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
      // Slight floating up and down
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  const materialProps = {
    metalness: 1,
    roughness: 0.1,
    color: '#e2e8f0',
    envMapIntensity: 2.5,
  };

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Head */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
      
      {/* Torso */}
      <mesh position={[0, 1.2, 0]} rotation={[0.2, 0, 0]}>
        <capsuleGeometry args={[0.5, 1.2, 16, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Left Arm (Dynamic Pose) */}
      <mesh position={[-0.8, 1.6, 0.4]} rotation={[0, 0, 0.8]}>
        <capsuleGeometry args={[0.15, 1.2, 16, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Right Arm (Dynamic Pose) */}
      <mesh position={[0.8, 1.8, -0.2]} rotation={[0, 0, -2.5]}>
        <capsuleGeometry args={[0.15, 1.2, 16, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Left Leg (Dynamic Pose) */}
      <mesh position={[-0.4, 0, 0.5]} rotation={[-0.4, 0, 0.2]}>
        <capsuleGeometry args={[0.2, 1.4, 16, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>

      {/* Right Leg (Dynamic Pose) */}
      <mesh position={[0.5, -0.2, -0.4]} rotation={[0.2, 0, -0.4]}>
        <capsuleGeometry args={[0.2, 1.4, 16, 16]} />
        <meshStandardMaterial {...materialProps} />
      </mesh>
    </group>
  );
};

const PyroEffects = () => {
  return (
    <>
      {/* Cold Sparks Bottom */}
      <Sparkles count={300} scale={[6, 2, 6]} position={[0, -2, 0]} size={3} color="#ffa500" speed={1.5} opacity={0.8} />
      {/* Ambient Smoke/Sparks */}
      <Sparkles count={150} scale={[8, 8, 8]} position={[0, 1, 0]} size={4} color="#7FE7E7" speed={0.5} opacity={0.4} />
      {/* Left Pyro Tower */}
      <Sparkles count={100} scale={[1, 5, 1]} position={[-3, 0, -2]} size={2} color="#ff4500" speed={2} opacity={0.9} />
      {/* Right Pyro Tower */}
      <Sparkles count={100} scale={[1, 5, 1]} position={[3, 0, -2]} size={2} color="#ff4500" speed={2} opacity={0.9} />
    </>
  );
};

const StagePlatform = () => {
  return (
    <mesh position={[0, -2.2, 0]}>
      <cylinderGeometry args={[3, 3.2, 0.4, 32]} />
      <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      {/* LED Ring */}
      <mesh position={[0, 0.21, 0]}>
        <ringGeometry args={[2.8, 2.9, 32]} />
        <meshBasicMaterial color="#ff4500" />
      </mesh>
    </mesh>
  );
};

const StageLights = () => {
  const groupRef = useRef();
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((light, i) => {
        light.rotation.x = Math.sin(state.clock.elapsedTime * 2 + i) * 0.5;
      });
    }
  });

  return (
    <group ref={groupRef} position={[0, -2, -2]}>
      <mesh position={[-2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5]} />
        <meshStandardMaterial color="#333" />
        <pointLight color="#7FE7E7" intensity={2} distance={10} />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.5]} />
        <meshStandardMaterial color="#333" />
        <pointLight color="#ff4500" intensity={2} distance={10} />
      </mesh>
    </group>
  );
};

const DanceHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-transparent">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-brand-accent text-xs md:text-sm uppercase tracking-[0.3em] font-body mb-6 block"
            >
              LIVE PERFORMANCE ENTERTAINMENT
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              DANCE CREW & <span className="text-orange-400 italic font-light drop-shadow-[0_0_15px_rgba(255,165,0,0.5)]">PYRO EFFECTS</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-brand-secondary/80 font-body text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Energetic performances, stunning choreography and breathtaking special effects designed to elevate every celebration.
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
                Book Performance
              </Link>
              <a
                href="#gallery"
                className="w-full sm:w-auto px-8 py-4 border border-brand-secondary/30 text-brand-secondary rounded-full font-body font-medium uppercase tracking-wider text-sm hover:border-brand-accent hover:text-brand-accent transition-all duration-300 glass-card"
              >
                View Gallery
              </a>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-[600px] relative w-full">
            <Canvas camera={{ position: [0, 1, 8], fov: 45 }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
              {/* Pyro lighting */}
              <pointLight position={[0, -2, 2]} intensity={2.5} color="#ff6b00" distance={10} />
              <pointLight position={[-3, 0, -2]} intensity={1.5} color="#ff4500" />
              <pointLight position={[3, 0, -2]} intensity={1.5} color="#ff4500" />
              
              <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <AbstractDancer />
              </Float>
              <StagePlatform />
              <StageLights />
              <PyroEffects />
              
              <Environment preset="night" />
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={true} autoRotateSpeed={0.5} />
            </Canvas>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30px] bg-orange-500/20 blur-[40px] rounded-full pointer-events-none"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DanceHero;
