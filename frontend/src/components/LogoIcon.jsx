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
      {/* Robot face container - Gold theme */}
      <div className="relative">
        {/* V-shaped antenna on top */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative w-7 h-5 flex justify-center">
            <div className="absolute left-1 w-1 h-5 bg-gradient-to-b from-gold-400 to-gold-500 transform -rotate-45 origin-bottom rounded-t-full" 
                 style={{ boxShadow: '0 0 8px rgba(255, 215, 0, 0.8)' }} />
            <div className="absolute right-1 w-1 h-5 bg-gradient-to-b from-gold-400 to-gold-500 transform rotate-45 origin-bottom rounded-t-full"
                 style={{ boxShadow: '0 0 8px rgba(255, 215, 0, 0.8)' }} />
            <div className="absolute -top-0.5 left-0 w-2 h-2 bg-gold-400 rounded-full"
                 style={{ boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)' }} />
            <div className="absolute -top-0.5 right-0 w-2 h-2 bg-gold-400 rounded-full"
                 style={{ boxShadow: '0 0 6px rgba(255, 215, 0, 0.8)' }} />
          </div>
        </div>
        
        {/* Robot face - rounded square with gold metallic gradient */}
        <div 
          className="rounded-xl flex flex-col items-center justify-center relative overflow-hidden"
          style={{
            width: '42.5px',
            height: '42.5px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFC700 25%, #FFB000 50%, #FFC700 75%, #FFD700 100%)',
            boxShadow: `
              inset 0 1px 3px rgba(255,255,255,0.6),
              inset 0 -2px 3px rgba(0,0,0,0.3),
              0 0 20px rgba(255, 215, 0, 0.8),
              0 0 40px rgba(255, 215, 0, 0.4)
            `,
            filter: 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.8))',
          }}
        >
          {/* Eyes - circular */}
          <div className="flex space-x-2 mt-2.5 mb-1">
            <div 
              className={`bg-black rounded-full transition-all duration-150 ${eyesClosed ? 'w-2.5 h-0.5' : 'w-2.5 h-2.5'}`}
              style={{ 
                boxShadow: eyesClosed ? 'none' : '0 0 3px rgba(0,0,0,0.5)' 
              }} 
            />
            <div 
              className={`bg-black rounded-full transition-all duration-150 ${eyesClosed ? 'w-2.5 h-0.5' : 'w-2.5 h-2.5'}`}
              style={{ 
                boxShadow: eyesClosed ? 'none' : '0 0 3px rgba(0,0,0,0.5)' 
              }} 
            />
          </div>
          
          {/* Smile - curved */}
          <div className="mt-auto mb-1.5">
            <svg width="24" height="10" viewBox="0 0 24 10">
              <path
                d="M 3 2 Q 12 9 21 2"
                stroke="black"
                strokeWidth="2"
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