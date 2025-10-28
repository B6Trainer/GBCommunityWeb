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
    <div className="fixed top-20 left-0 right-0 z-40 glass-morphism border-b border-gold-400/20 h-12 flex items-center">
      <div className="w-4/5 overflow-hidden">
        <div className="ticker-content flex items-center gold-text">
          {[...tickerMessages, ...tickerMessages].map((message, index) => (
            <div key={index} className="flex items-center whitespace-nowrap">
              <span className="mx-4">{message}</span>
              <Coins className="w-5 h-5 text-gold-400 animate-glow" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center glass-morphism border-l border-gold-400/30">
        <div className="text-center px-4">
          <div className="text-xs gold-text">Gold Price</div>
          <div className="text-sm font-bold text-gold-400">
            ${goldPriceOz}/oz
          </div>
          <div className="text-xs text-gold-500">
            ${goldPriceGram}/g
          </div>
        </div>
      </div>
      <style>{`
        .ticker-content {
          animation: scroll 30s linear infinite;
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