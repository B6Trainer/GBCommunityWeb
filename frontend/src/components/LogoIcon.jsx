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
    <div className="relative animate-float logo-icon-container">
      {/* Robot face container - Gold theme */}
      <div className="relative">
        {/* V-shaped antenna on top - NO DOTS */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative w-2 h-5 flex justify-center">
            <div className="absolute left-1 antenna-arm transform -rotate-45 origin-bottom rounded-t-full" />
            <div className="absolute right-1 antenna-arm transform rotate-45 origin-bottom rounded-t-full" />
          </div>
        </div>
        
        {/* Robot face - rounded square with gold metallic gradient */}
        <div className="logo-face rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
          {/* Eyes - circular */}
          <div className="flex space-x-2 mt-2.5 mb-0.5">
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
          
          {/* Lips connecting to eyes - full mouth with lips effect */}
          <div className="mt-auto mb-1.5 relative" style={{ width: '28px', height: '14px' }}>
            <svg width="28" height="14" viewBox="0 0 28 14" style={{ position: 'absolute', top: 0, left: 0 }}>
              {/* Upper lip - curves from left eye to right eye */}
              {/* <path
                d="M 2 1 Q 7 0 14 0 Q 21 0 26 1 Q 21 4 14 4 Q 7 4 2 1 Z"
                fill="black"
                opacity="0.9"
              /> */}
              {/* Lower lip - smile curve */}
              <path
                d="M 2 2 Q 14 11 26 2 Q 21 6 14 6 Q 7 6 2 2 Z"
                fill="black"
                opacity="0.8"
              />
              {/* Lip line - center */}
              <path
                d="M 2 1.5 Q 14 5 26 1.5"
                stroke="black"
                strokeWidth="0.5"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;