import React from 'react';

const generateStars = () => {
  const list = [];
  
  // Layer 1: Small distant stars (1px-2px) - Increased to 75 stars
  for (let i = 0; i < 75; i++) {
    list.push({
      id: `l1-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1 + 1, // 1px to 2px
      duration: `${Math.random() * 4 + 2.5}s`, // 2.5s to 6.5s (very calm)
      delay: `${Math.random() * 6}s`,
      layer: 1,
      color: '#ffffff'
    });
  }

  // Layer 2: Medium stars with twinkle effect (2px-3px) - Increased to 38 stars
  for (let i = 0; i < 38; i++) {
    list.push({
      id: `l2-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1 + 2, // 2px to 3px
      duration: `${Math.random() * 4 + 2}s`, // 2s to 6s
      delay: `${Math.random() * 6}s`,
      layer: 2,
      color: Math.random() > 0.5 ? '#7FE7E7' : '#ffffff' // white or signature cyan
    });
  }

  // Layer 3: Few brighter stars with stronger glow (3px-4px) - Increased to 19 stars
  for (let i = 0; i < 19; i++) {
    list.push({
      id: `l3-${i}`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 1 + 3, // 3px to 4px
      duration: `${Math.random() * 3 + 2}s`, // 2s to 5s
      delay: `${Math.random() * 6}s`,
      layer: 3,
      color: '#7FE7E7', // teal glow star
      glow: true
    });
  }

  return list;
};

const STATIC_STARS = generateStars();

const NightSkyBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 w-full h-full">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes twinkle-stars {
          0%, 100% {
            opacity: 0.35;
            transform: scale(0.9);
          }
          50% {
            opacity: 1.0;
            transform: scale(1.1);
          }
        }
        .star-item {
          position: absolute;
          border-radius: 50%;
          animation: twinkle-stars var(--twinkle-duration) ease-in-out infinite;
          animation-delay: var(--twinkle-delay);
          will-change: opacity, transform;
        }
        .star-glow-3 {
          box-shadow: 0 0 12px rgba(127, 231, 231, 0.95), 0 0 4px rgba(255, 255, 255, 0.85);
        }
      `}} />
      
      {STATIC_STARS.map((star) => (
        <div
          key={star.id}
          className={`star-item ${star.glow ? 'star-glow-3' : ''}`}
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            '--twinkle-duration': star.duration,
            '--twinkle-delay': star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default NightSkyBackground;
