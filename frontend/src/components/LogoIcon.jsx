import { Smile } from 'lucide-react';

const LogoIcon = () => {
  return (
    <div className="relative">
      <div className="w-12 h-12 glass-morphism border-2 border-gold-400 rounded-lg flex items-center justify-center animate-float gold-glow">
        <Smile className="text-gold-400 w-8 h-8" />
        {/* V-shaped antenna */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="relative w-6 h-4">
            <div className="absolute left-0 w-0.5 h-4 bg-gold-400 transform -rotate-45 origin-bottom" />
            <div className="absolute right-0 w-0.5 h-4 bg-gold-400 transform rotate-45 origin-bottom" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoIcon;