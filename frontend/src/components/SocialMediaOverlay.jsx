import { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const SocialMediaOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, isVisible ? 5000 : 10000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const socials = [
    { icon: Facebook, name: 'Facebook', link: '#' },
    { icon: Twitter, name: 'Twitter', link: '#' },
    { icon: Instagram, name: 'Instagram', link: '#' },
    { icon: Linkedin, name: 'LinkedIn', link: '#' },
    { icon: Youtube, name: 'YouTube', link: '#' },
    { icon: MessageCircle, name: 'Telegram', link: '#' },
  ];

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-30 transition-transform duration-500 ${
        isVisible ? 'translate-x-0' : 'translate-x-full'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
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
                className={`flex items-center space-x-3 p-2 rounded-lg gold-text hover:bg-gold-400/20 transition-all duration-300 ${
                  isExpanded ? 'w-40' : 'w-12'
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                {isExpanded && (
                  <span className="text-sm font-medium whitespace-nowrap">
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