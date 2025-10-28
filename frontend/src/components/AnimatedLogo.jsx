import { useState, useEffect } from 'react';

const AnimatedLogo = () => {
  const text = 'Gold Bucks';
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Wait 10 seconds before restarting
        setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
        }, 10000);
      }
    }, 200); // Letter animation speed

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="text-2xl font-bold">
      <span className="gold-embossed tracking-wider">
        {displayedText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default AnimatedLogo;