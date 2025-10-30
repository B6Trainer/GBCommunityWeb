import { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const logoname = 'GOLD BUCKS';
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveOffset((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logo-text-container">
      <div className="font-bold tracking-wider flex justify-center">
        {logoname.split('').map((letter, index) => (
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