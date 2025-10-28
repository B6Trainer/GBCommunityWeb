import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Briefcase, UserPlus, Wallet, GitBranch, Coins, X } from 'lucide-react';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const carouselImages = [
    'https://images.unsplash.com/photo-1761437856299-af640f6e75ad',
    'https://images.unsplash.com/photo-1639322537228-f710d846310a',
    'https://images.unsplash.com/photo-1594896733292-9a77b5809c63',
    'https://images.pexels.com/photos/6766436/pexels-photo-6766436.jpeg',
    'https://images.unsplash.com/photo-1605792657660-596af9009e82',
    'https://images.pexels.com/photos/1097946/pexels-photo-1097946.jpeg',
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Passive Income',
      description: 'Earn consistent returns on your digital gold investments with our blockchain-powered platform.',
      color: 'from-gold-600 to-gold-400',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Connect with thousands of investors worldwide and grow your network in the digital gold community.',
      color: 'from-gold-500 to-gold-300',
    },
    {
      icon: TrendingUp,
      title: 'Wealth Building',
      description: 'Build lasting wealth through strategic gold investments backed by secure blockchain technology.',
      color: 'from-gold-600 to-gold-500',
    },
    {
      icon: Briefcase,
      title: 'Your Own Business',
      description: 'Start your own digital gold business and become a leader in the blockchain revolution.',
      color: 'from-gold-500 to-gold-400',
    },
  ];

  const steps = [
    {
      icon: UserPlus,
      title: 'Create a free account',
      description: 'Sign up in minutes and join our global community of digital gold investors.',
    },
    {
      icon: Wallet,
      title: 'Fund your wallet and activate',
      description: 'Add funds to your wallet and activate your account to start investing.',
    },
    {
      icon: GitBranch,
      title: 'Create your first node',
      description: 'Set up your blockchain node and begin your journey in digital gold investment.',
    },
    {
      icon: Coins,
      title: 'Start referring and earn',
      description: 'Invite others to join and earn commissions on their investments.',
    },
  ];

  return (
    <div className="pt-32 min-h-screen">
      {/* Hero Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" data-testid="hero-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold gold-embossed text-center mb-12"
        >
          Discover Digital Gold
        </motion.h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-video overflow-hidden rounded-2xl glass-morphism border border-gold-400/30 gold-glow hover:scale-105 transition-transform duration-300">
                <img
                  src={image}
                  alt={`Gold investment ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
          data-testid="image-popup"
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-gold-400 hover:text-gold-300 transition-smooth"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full rounded-2xl shadow-2xl gold-glow"
            />
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" data-testid="benefits-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gold-embossed text-center mb-12"
        >
          Why Choose Gold Bucks?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-morphism border border-gold-400/30 rounded-2xl p-6 hover:gold-glow transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold gold-text mb-3">{benefit.title}</h3>
                <p className="text-gold-500 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* How to Join Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20" data-testid="how-to-join-section">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold gold-embossed text-center mb-12"
        >
          How to Join
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-morphism border border-gold-400/30 rounded-2xl p-6 hover:gold-glow transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center text-black font-bold text-xl gold-glow">
                    {index + 1}
                  </div>
                  <div className="flex justify-center mb-4 mt-4">
                    <div className="w-20 h-20 rounded-full glass-morphism border-2 border-gold-400 flex items-center justify-center animate-float">
                      <Icon className="w-10 h-10 text-gold-400 animate-glow" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold gold-text mb-3 text-center">{step.title}</h3>
                  <p className="text-gold-500 text-sm leading-relaxed text-center">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gold-400 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-morphism border border-gold-400/30 rounded-3xl p-12 text-center gold-glow"
        >
          <h2 className="text-4xl font-bold gold-embossed mb-4">Ready to Start Your Journey?</h2>
          <p className="text-gold-500 mb-8 text-lg">
            Join thousands of investors building wealth through digital gold
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-400 transition-smooth gold-glow">
            Get Started Now
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;