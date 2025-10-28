import { Coins } from 'lucide-react';

const Ticker = () => {
  const tickerMessages = [
    'Welcome to Gold Bucks Digital Gold Community',
    'Invest in Digital Gold backed by Blockchain',
    'Start earning passive income today',
    'Join thousands of successful investors',
    'Secure your financial future with Gold Bucks',
    'Build wealth through blockchain technology',
  ];

  const goldPriceOz = import.meta.env.VITE_GOLD_PRICE_OZ || '2650.00';
  const goldPriceGram = import.meta.env.VITE_GOLD_PRICE_GRAM || '85.23';

  return (
    <div className="fixed top-20 left-0 right-0 z-40 border-b border-gold-400/30 gold-glow h-12 flex items-center ticker-gold-translucent">
      {/* Scrolling ticker - takes less space on mobile */}
      <div className="w-3/5 sm:w-4/5 overflow-hidden">
        <div className="ticker-content flex items-center gold-text">
          {[...tickerMessages, ...tickerMessages].map((message, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              <span className="mx-4 text-xs sm:text-sm md:text-base">{message}</span>
              <Coins className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 animate-glow" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Gold price section - visible on all screens, compact on mobile */}
      <div className="w-2/5 sm:w-1/5 h-full flex items-center justify-center border-l border-gold-400/30 ticker-gold-opaque">
        <div className="text-center px-2">
          <div className="flex flex-col items-center">
            <span className="text-[10px] sm:text-xs font-medium text-black mb-0.5">Gold Price</span>
            <div className="text-xs sm:text-sm font-bold text-black">
              ${goldPriceGram}/g
            </div>
            <div className="text-[10px] sm:text-xs text-black/80">
              ${goldPriceOz}/oz
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .ticker-content {
          animation: scroll 15s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Ticker;