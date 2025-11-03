import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/about' },
      { name: 'Careers', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    products: [
      { name: 'Wallet', path: '/products/wallet' },
      { name: 'Zara AI', path: '/products/zara-ai' },
      { name: 'GBUSD', path: '/products/gbusd' },
      { name: 'GBXAU', path: '/products/gbxau' },
    ],
    resources: [
      { name: 'Plans', path: '/plans' },
      { name: 'Events', path: '/events' },
      { name: 'Testimonials', path: '/testimonials' },
      { name: 'Dashboard', path: '/dashboard' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Disclaimer', path: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: '#1877F2' },
    { icon: Twitter, name: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: Instagram, name: 'Instagram', url: '#', color: '#E4405F' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: '#0A66C2' },
    { icon: Youtube, name: 'YouTube', url: '#', color: '#FF0000' },
    { icon: MessageCircle, name: 'Telegram', url: '#', color: '#26A5E4' },
  ];

  return (
    <footer className="footer-container relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold gold-text mb-4">Gold Bucks</h3>
            <p className="text-gold-500 text-sm mb-4">
              Building the future of digital gold investment through blockchain technology.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="social-icon icon-twinkle"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: social.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold gold-text mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-bold gold-text mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-bold gold-text mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold gold-text mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-gold-500">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>support@mygoldbucks.com</span>
              </li>
              {/* <li className="flex items-start space-x-2 text-sm text-gold-500">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gold-500">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Blockchain St<br />San Francisco, CA 94102</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold-400/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gold-500 text-sm">
            © {currentYear} Gold Bucks. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="footer-link text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
