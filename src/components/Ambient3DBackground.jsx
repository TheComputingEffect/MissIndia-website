import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sparkles, MeshDistortMaterial } from '@react-three/drei';

const AbstractShape = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, -5]}>
        <torusKnotGeometry args={[3, 0.4, 128, 32]} />
        <MeshDistortMaterial
          color="#033B3D"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const Ambient3DBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-brand-dark to-brand-dark"></div>
      
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#7FE7E7" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#D9D6CF" />
        
        <AbstractShape />
        
        <Sparkles
          count={100}
          scale={20}
          size={3}
          speed={0.2}
          opacity={0.3}
          color="#7FE7E7"
        />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default Ambient3DBackground;
