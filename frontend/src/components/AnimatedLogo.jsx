import { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const text = 'GOLD BUCKS';
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-4 py-2 rounded-xl" 
         style={{
           background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 25%, #FFB000 50%, #FFC700 75%, #FFD700 100%)',
           boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.5), inset 0 -1px 3px rgba(0,0,0,0.3), 0 4px 6px rgba(0,0,0,0.3)'
         }}>
      <div className="text-xl font-bold tracking-wider flex">
        {text.split('').map((letter, index) => (
          <span
            key={index}
            className="inline-block text-black transition-all duration-300"
            style={{
              transform: `translateY(${Math.sin((waveOffset + index * 10) * 0.1) * 5}px)`,
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLogo;