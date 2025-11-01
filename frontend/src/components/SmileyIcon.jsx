import { useState, useEffect } from 'react';
import "@/assets/css/smileyicon.css";
const SmileyIcon = () => {
  const [eyesClosed, setEyesClosed] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setEyesClosed(true);
      setTimeout(() => setEyesClosed(false), 150);
    }, 2500);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
<div className="logo-icon-container">
  {/* Antenna */}
  <div className="antenna-wrapper">
    <div className="antenna-arm left-arm"></div>
    <div className="antenna-arm right-arm"></div>
  </div>

  {/* Robot Face */}
  <div className="logo-face">
    <div className="eyes">
      <div className={`eye ${eyesClosed ? 'closed' : ''}`}></div>
      <div className={`eye ${eyesClosed ? 'closed' : ''}`}></div>
    </div>
    <div className="smile">
      <svg viewBox="0 0 26 14">
        <path d="M 2 3 Q 13 13 24 3" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="6" cy="6" r="1.5" fill="black" opacity="0.4" />
        <circle cx="20" cy="6" r="1.5" fill="black" opacity="0.4" />
      </svg>
    </div>
  </div>
</div>


  );
};

export default SmileyIcon;