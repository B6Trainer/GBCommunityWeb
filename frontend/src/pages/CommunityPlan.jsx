import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CommunityPlan = () => {
  const features = [
    'Basic investment access',
    'Community network benefits',
    'Standard returns',
    'Email support',
    'Monthly reports',
    'Referral bonuses',
  ];

  return (
    <div className="pt-32 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-8"
      >
        Community Plan
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-morphism border border-gold-400/30 rounded-3xl p-10 gold-glow"
      >
        <div className="text-center mb-8">
          <div className="text-gold-500 mb-2">Starting at</div>
          <div className="text-6xl font-bold gold-embossed mb-4">$100</div>
          <div className="text-gold-500">Minimum investment</div>
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              className="flex items-center space-x-3"
            >
              <div className="w-6 h-6 rounded-full bg-gold-400 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-black" />
              </div>
              <span className="text-gold-500">{feature}</span>
            </motion.div>
          ))}
        </div>

        <button className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-400 transition-smooth gold-glow">
          Get Started
        </button>
      </motion.div>
    </div>
  );
};

export default CommunityPlan;