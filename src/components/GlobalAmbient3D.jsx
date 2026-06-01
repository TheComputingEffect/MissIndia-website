import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles } from '@react-three/drei';

const ChromeRibbonSculpture = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={[0, 0, -6]}>
        {/* Glass core */}
        <mesh>
          <torusKnotGeometry args={[3.5, 0.3, 128, 32]} />
          <meshPhysicalMaterial 
            transmission={1}
            opacity={1}
            metalness={0.1}
            roughness={0.1}
            ior={1.5}
            color="#000000"
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        {/* Chrome wireframe accent */}
        <mesh scale={1.01}>
          <torusKnotGeometry args={[3.5, 0.3, 128, 32]} />
          <meshStandardMaterial 
            color="#7FE7E7"
            wireframe
            transparent
            opacity={0.2}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </group>
    </Float>
  );
};

const AmbientParticles = ({ count = 60 }) => {
  return (
    <Sparkles
      count={count}
      scale={20}
      size={3}
      speed={0.2}
      opacity={0.5}
      color="#7FE7E7"
    />
  );
};

const GlobalAmbient3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      {/* 3D Scene container */}
      <div 
        id="global-ambient-container"
        className="absolute inset-0"
      >
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#7FE7E7" />
          <directionalLight position={[-10, -10, -5]} intensity={1} color="#ffffff" />
          
          <ChromeRibbonSculpture />
          <AmbientParticles />
          
          <Environment preset="city" />
        </Canvas>
      </div>
    </div>
  );
};

export default GlobalAmbient3D;
