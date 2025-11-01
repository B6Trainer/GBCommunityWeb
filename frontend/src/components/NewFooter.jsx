import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';
import "@/assets/css/footer.css";
import AnimatedLogo from './AnimatedLogo';
import LogoIcon from './LogoIcon';
const NewFooter = () => {
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



  return (

    <footer className="footer-container relative z-10 mt-20 header-metallic-shine">
      <div className="footer-inner">
        {/* Top Section */}
        <div className="footer-brand-grid">
          {/* Brand Section */}
          <div >
            <LogoIcon />
            <AnimatedLogo />
            <p className="footer-description">
              Building the future of digital gold investment through blockchain technology.
            </p>

          </div>          
      </div>

      <div className="footer-grid">

          {/* Company Links */}
          <div>
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-list">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-list">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
      </div>
    


        <div className="footer-divider"></div>
        <div className="footer-bottom">
          {/* Contact Info */}
          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li>
                <Mail className="footer-icon" />
                <span>support@mygoldbucks.com</span>
              </li>
            </ul>
          </div>
        </div>

    {/* Divider */}
    <div className="footer-divider"></div>


  </div>
</footer>


  );
};

export default NewFooter;
