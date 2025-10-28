import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Placeholder for form submission logic
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-8"
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gold-500 text-center text-lg mb-16 max-w-3xl mx-auto"
      >
        Have questions? We're here to help. Reach out to our team.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass-morphism border border-gold-400/30 rounded-2xl p-8 gold-glow"
        >
          <h2 className="text-2xl font-bold gold-text mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gold-400 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 glass-morphism border border-gold-400/30 rounded-lg gold-text focus:outline-none focus:border-gold-400 transition-smooth"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gold-400 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 glass-morphism border border-gold-400/30 rounded-lg gold-text focus:outline-none focus:border-gold-400 transition-smooth"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gold-400 mb-2 font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 glass-morphism border border-gold-400/30 rounded-lg gold-text focus:outline-none focus:border-gold-400 transition-smooth"
                placeholder="How can we help?"
                required
              />
            </div>

            <div>
              <label className="block text-gold-400 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 glass-morphism border border-gold-400/30 rounded-lg gold-text focus:outline-none focus:border-gold-400 transition-smooth resize-none"
                placeholder="Your message..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-400 transition-smooth gold-glow flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-8"
        >
          <div className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300">
            <Mail className="w-10 h-10 text-gold-400 mb-4" />
            <h3 className="text-xl font-bold gold-text mb-2">Email</h3>
            <p className="text-gold-500">support@goldbucks.com</p>
            <p className="text-gold-500">info@goldbucks.com</p>
          </div>

          <div className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300">
            <Phone className="w-10 h-10 text-gold-400 mb-4" />
            <h3 className="text-xl font-bold gold-text mb-2">Phone</h3>
            <p className="text-gold-500">+1 (555) 123-4567</p>
            <p className="text-gold-500 text-sm">Mon-Fri, 9AM-6PM EST</p>
          </div>

          <div className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300">
            <MapPin className="w-10 h-10 text-gold-400 mb-4" />
            <h3 className="text-xl font-bold gold-text mb-2">Office</h3>
            <p className="text-gold-500">123 Blockchain Street</p>
            <p className="text-gold-500">San Francisco, CA 94102</p>
            <p className="text-gold-500">United States</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;