import { useState, useEffect } from 'react';

const LogoIcon = () => {
  const [eyesClosed, setEyesClosed] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyesClosed(true);
      setTimeout(() => setEyesClosed(false), 200);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative">
      {/* Gold metallic square background */}
      <div className="w-12 h-12 rounded-lg flex items-center justify-center animate-float gold-glow relative overflow-hidden"
           style={{
             background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 25%, #FFB000 50%, #FFC700 75%, #FFD700 100%)',
             boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.5), inset 0 -1px 2px rgba(0,0,0,0.3)'
           }}>
        
        {/* Eyes */}
        <div className="flex space-x-2 mb-1">
          <div className={`w-2 h-2 bg-black rounded-full transition-all duration-200 ${eyesClosed ? 'h-0.5' : 'h-2'}`} />
          <div className={`w-2 h-2 bg-black rounded-full transition-all duration-200 ${eyesClosed ? 'h-0.5' : 'h-2'}`} />
        </div>
        
        {/* Smile */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
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
      
      {/* V-shaped antenna starting from middle top */}
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
        <div className="relative w-8 h-5 flex justify-center">
          <div className="absolute left-1 w-0.5 h-5 bg-gold-400 transform -rotate-35 origin-bottom" />
          <div className="absolute right-1 w-0.5 h-5 bg-gold-400 transform rotate-35 origin-bottom" />
          {/* Round balls on top of antenna */}
          <div className="absolute -top-1 left-0 w-1.5 h-1.5 bg-gold-400 rounded-full" />
          <div className="absolute -top-1 right-0 w-1.5 h-1.5 bg-gold-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;