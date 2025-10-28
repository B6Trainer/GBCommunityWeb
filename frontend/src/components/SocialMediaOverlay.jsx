import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const SocialMediaOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Don't hide when hovered
    
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, isVisible ? 5000 : 10000);

    return () => clearInterval(timer);
  }, [isVisible, isHovered]);

  const socials = [
    { icon: Facebook, name: 'Facebook', link: '#', color: '#1877F2', hoverGlow: '0 0 15px #1877F2' },
    { icon: Twitter, name: 'Twitter', link: '#', color: '#1DA1F2', hoverGlow: '0 0 15px #1DA1F2' },
    { icon: Instagram, name: 'Instagram', link: '#', color: '#E4405F', hoverGlow: '0 0 15px #E4405F' },
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: '#0A66C2', hoverGlow: '0 0 15px #0A66C2' },
    { icon: Youtube, name: 'YouTube', link: '#', color: '#FF0000', hoverGlow: '0 0 15px #FF0000' },
    { icon: MessageCircle, name: 'Telegram', link: '#', color: '#26A5E4', hoverGlow: '0 0 15px #26A5E4' },
  ];

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-30 transition-transform duration-500 ${
        isVisible || isHovered ? 'translate-x-0' : 'translate-x-full'
      }`}
      onMouseEnter={() => {
        setIsExpanded(true);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsExpanded(false);
        setIsHovered(false);
      }}
      data-testid="social-media-overlay"
    >
      <div className="glass-morphism border-l border-t border-b border-gold-400/30 rounded-l-2xl gold-glow p-2">
        <div className="flex flex-col space-y-3">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gold-400/20 transition-all duration-300 group ${
                  isExpanded ? 'w-40' : 'w-12'
                }`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: social.color,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = social.hoverGlow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                {isExpanded && (
                  <span className="text-sm font-medium whitespace-nowrap text-gold-400">
                    {social.name}
                  </span>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaOverlay;