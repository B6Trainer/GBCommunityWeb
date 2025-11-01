import { Link } from 'react-router-dom';

import "@/assets/css/footer.css";

const SleekFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {

    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Disclaimer', path: '#' },
    ],
  };



  return (

    <footer className="footer-container relative z-10 mt-10 header-metallic-shine">

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>© {currentYear} Gold Bucks. All rights reserved.</p>
          <div className="footer-legal">
            {footerLinks.legal.map((link, index) => (
              <Link key={index} to={link.path} className="footer-link">
                {link.name}
              </Link>
            ))}
          </div>
      
  </div>
</footer>


  );
};

export default SleekFooter;
