import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';
import LogoIcon from './LogoIcon';

const Header = ({ onLoginClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuItems = [
    { name: 'About us', path: '/about' },
    { 
      name: 'Plans', 
      path: '/plans',
      submenu: [
        { name: 'Community Plan', path: '/plans/community' },
        { name: 'Gold Box Plan', path: '/plans/gold-box' },
      ]
    },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Events', path: '/events' },
    { name: 'Earnings', path: '/earnings' },
    { 
      name: 'Products', 
      path: '/products',
      submenu: [
        { name: 'Wallet', path: '/products/wallet' },
        { name: 'Zara AI', path: '/products/zara-ai' },
        { name: 'GBUSD', path: '/products/gbusd' },
        { name: 'GBXAU', path: '/products/gbxau' },
        { name: 'Swap System', path: '/products/swap-system' },
      ]
    },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact us', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-gold-400/30 gold-glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <LogoIcon />
            <AnimatedLogo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <button className="gold-text font-semibold hover:text-gold-300 transition-smooth flex items-center">
                      {item.name}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 glass-morphism rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gold-400/20">
                      {item.submenu.map((subitem, subindex) => (
                        <Link
                          key={subindex}
                          to={subitem.path}
                          className="block px-4 py-3 gold-text hover:bg-gold-400/10 transition-smooth first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="gold-text font-semibold hover:text-gold-300 transition-smooth"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Login Button - Desktop */}
          <button
            onClick={onLoginClick}
            className="hidden lg:block px-6 py-2 glass-morphism border border-gold-400 gold-text rounded-lg hover:bg-gold-400/20 transition-smooth gold-glow"
            data-testid="desktop-login-button"
          >
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 gold-text"
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed top-20 right-0 w-[40%] h-[60vh] glass-morphism border-l border-b border-gold-400 gold-glow rounded-bl-3xl overflow-y-auto animate-slide-in"
          data-testid="mobile-menu"
        >
          <nav className="p-6 space-y-4">
            <button
              onClick={() => {
                onLoginClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-4 py-3 glass-morphism border border-gold-400 gold-text rounded-lg hover:bg-gold-400/20 transition-smooth gold-glow text-center"
              data-testid="mobile-login-button"
            >
              Login
            </button>
            
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === index ? null : index)}
                      className="w-full text-left gold-text font-semibold hover:text-gold-300 transition-smooth flex items-center justify-between py-2"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === index ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubmenu === index && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            to={subitem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block gold-text hover:text-gold-300 transition-smooth py-2 pl-2 border-l-2 border-gold-400/30"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block gold-text font-semibold hover:text-gold-300 transition-smooth py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;