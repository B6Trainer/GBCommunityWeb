import { useState, useEffect } from 'react';

const LogoIcon = () => {
  const [eyesClosed, setEyesClosed] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyesClosed(true);
      setTimeout(() => setEyesClosed(false), 150);
    }, 2500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative animate-float">
      {/* Gold metallic square background with antenna */}
      <div className="relative">
        {/* V-shaped antenna starting from middle top - moves with the face */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative w-8 h-6 flex justify-center">
            {/* Left antenna arm */}
            <div className="absolute left-0 w-1 h-6 bg-gradient-to-b from-gold-400 to-gold-500 transform -rotate-35 origin-bottom rounded-t-full" 
                 style={{ boxShadow: '0 0 8px rgba(255, 215, 0, 0.6)' }} />
            {/* Right antenna arm */}
            <div className="absolute right-0 w-1 h-6 bg-gradient-to-b from-gold-400 to-gold-500 transform rotate-35 origin-bottom rounded-t-full"
                 style={{ boxShadow: '0 0 8px rgba(255, 215, 0, 0.6)' }} />
            {/* Round balls on top of antenna */}
            <div className="absolute -top-0.5 -left-1 w-2 h-2 bg-gold-400 rounded-full"
                 style={{ boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)' }} />
            <div className="absolute -top-0.5 -right-1 w-2 h-2 bg-gold-400 rounded-full"
                 style={{ boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)' }} />
          </div>
        </div>
        
        {/* Face square */}
        <div className="w-12 h-12 rounded-lg flex flex-col items-center justify-center gold-glow relative overflow-hidden"
             style={{
               background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 25%, #FFB000 50%, #FFC700 75%, #FFD700 100%)',
               boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5), inset 0 -1px 2px rgba(0,0,0,0.3)'
             }}>
          
          {/* Eyes */}
          <div className="flex space-x-2 mt-2 mb-1">
            <div className={`bg-black rounded-full transition-all duration-150 ${eyesClosed ? 'w-2 h-0.5' : 'w-2 h-2'}`} />
            <div className={`bg-black rounded-full transition-all duration-150 ${eyesClosed ? 'w-2 h-0.5' : 'w-2 h-2'}`} />
          </div>
          
          {/* Smile */}
          <div className="mt-auto mb-1">
            <svg width="20" height="10" viewBox="0 0 20 10">
              <path
                d="M 2 2 Q 10 8 18 2"
                stroke="black"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;