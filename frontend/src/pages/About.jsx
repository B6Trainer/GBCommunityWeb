import { motion } from 'framer-motion';
import { Target, Award, Globe, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-8"
      >
        About Gold Bucks
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gold-500 text-center text-lg mb-16 max-w-3xl mx-auto"
      >
        Building the future of digital gold investment through blockchain technology
      </motion.p>
      <p className="text-gold-500 leading-relaxed mb-16">Gold Bucks is a forward-thinking Web3 solution provider, bridging the gap between traditional gold markets and decentralized finance (DeFi) using blockchain technology. We aim to revolutionize the way gold is transacted, invested, and secured by offering innovative, blockchain-powered products. Our goal is to provide transparency, security, and convenience in the gold market while fostering a robust and engaged community. Our solutions will allow gold traders, investors, and enthusiasts to seamlessly engage with digital assets while keeping gold at the core of the value proposition.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {[
          { icon: Target, title: 'Our Mission', text: 'To democratize gold investment and make it accessible to everyone through blockchain technology.' },
          { icon: Award, title: 'Our Vision', text: 'Creating a global community where everyone can build wealth through secure digital gold investments.' },
          { icon: Globe, title: 'Global Reach', text: 'Serving thousands of investors across multiple countries with 24/7 platform availability.' },
          { icon: Shield, title: 'Security First', text: 'Your investments are protected by cutting-edge blockchain security and encryption.' },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300"
            >
              <Icon className="w-12 h-12 text-gold-400 mb-4" />
              <h3 className="text-2xl font-bold gold-text mb-3">{item.title}</h3>
              <p className="text-gold-500 leading-relaxed">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;