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
      {/* Robot face container - Gold theme - Responsive */}
      <div className="relative">
        {/* V-shaped antenna on top - NO DOTS - Responsive */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ top: '-12px' }}>
          <div className="relative w-5 sm:w-6 lg:w-7 h-4 sm:h-4 lg:h-5 flex justify-center">
            <div className="absolute left-0.5 sm:left-1 antenna-arm transform -rotate-45 origin-bottom rounded-t-full" />
            <div className="absolute right-0.5 sm:right-1 antenna-arm transform rotate-45 origin-bottom rounded-t-full" />
          </div>
        </div>
        
        {/* Robot face - rounded square with gold metallic gradient - Responsive */}
        <div className="logo-face rounded-lg sm:rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
          {/* Eyes - circular - Responsive */}
          <div className="flex space-x-1.5 sm:space-x-2 mt-2 sm:mt-2.5 mb-0.5 sm:mb-1">
            <div 
              className={`bg-black rounded-full transition-all duration-150 ${eyesClosed ? 'w-2 sm:w-2.5 h-0.5' : 'w-2 sm:w-2.5 h-2 sm:h-2.5'}`}
              style={{ 
                boxShadow: eyesClosed ? 'none' : '0 0 3px rgba(0,0,0,0.5)' 
              }} 
            />
            <div 
              className={`bg-black rounded-full transition-all duration-150 ${eyesClosed ? 'w-2 sm:w-2.5 h-0.5' : 'w-2 sm:w-2.5 h-2 sm:h-2.5'}`}
              style={{ 
                boxShadow: eyesClosed ? 'none' : '0 0 3px rgba(0,0,0,0.5)' 
              }} 
            />
          </div>
          
          {/* Deep smile with dimple - Responsive */}
          <div className="mt-auto mb-1 sm:mb-1.5">
            <svg className="w-5 h-3 sm:w-6 sm:h-3.5 lg:w-7 lg:h-4" viewBox="0 0 26 14">
              {/* Main smile curve - deeper */}
              <path
                d="M 2 3 Q 13 13 24 3"
                stroke="black"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              {/* Left dimple */}
              <circle
                cx="6"
                cy="6"
                r="1.5"
                fill="black"
                opacity="0.4"
              />
              {/* Right dimple */}
              <circle
                cx="20"
                cy="6"
                r="1.5"
                fill="black"
                opacity="0.4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;