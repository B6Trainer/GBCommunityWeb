import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const GoldBoxPlan = () => {
  const features = [
    'Premium investment access',
    'Priority community benefits',
    'Enhanced returns',
    '24/7 priority support',
    'Daily detailed reports',
    'Enhanced referral bonuses',
    'Exclusive events access',
    'Personal account manager',
  ];

  return (
    <div className="pt-32 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center mb-8"
      >
        <Star className="w-8 h-8 text-gold-400 mr-3" />
        <h1 className="text-5xl font-bold gold-embossed text-center">Gold Box Plan</h1>
        <Star className="w-8 h-8 text-gold-400 ml-3" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-morphism border-2 border-gold-400 rounded-3xl p-10 gold-glow"
      >
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 bg-gold-400 text-black rounded-full text-sm font-bold mb-4">
            PREMIUM
          </div>
          <div className="text-gold-500 mb-2">Starting at</div>
          <div className="text-6xl font-bold gold-embossed mb-4">$500</div>
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
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 flex items-center justify-center flex-shrink-0 gold-glow">
                <Check className="w-4 h-4 text-black" />
              </div>
              <span className="text-gold-400 font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>

        <button className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold text-lg rounded-lg hover:from-gold-500 hover:to-gold-300 transition-smooth gold-glow">
          Get Premium Access
        </button>
      </motion.div>
    </div>
  );
};

export default GoldBoxPlan;