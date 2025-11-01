import { motion } from 'framer-motion';
import { Coins, Shield, TrendingUp, Lock } from 'lucide-react';

const GBXAU = () => {
  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <Coins className="w-20 h-20 text-gold-400 mx-auto mb-6 animate-glow" />
        <h1 className="text-5xl font-bold gold-embossed mb-4">GBXAU</h1>
        <p className="text-gold-500 text-lg max-w-2xl mx-auto">
          Gold-backed digital token representing physical gold ownership
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-morphism border border-gold-400/30 rounded-3xl p-10 text-center mb-12 gold-glow"
      >
        <div className="text-gold-500 mb-2">Current Value</div>
        <div className="text-7xl font-bold gold-embossed mb-4">$2,650</div>
        <div className="text-gold-500">Per troy ounce of gold</div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Coins, title: 'Gold-Backed', text: 'Each token represents real physical gold' },
          { icon: Shield, title: 'Secure Storage', text: 'Gold stored in certified vaults' },
          { icon: TrendingUp, title: 'Value Growth', text: 'Track gold market prices in real-time' },
          { icon: Lock, title: 'Blockchain Verified', text: 'Transparent and auditable ownership' },
        ].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="glass-morphism border border-gold-400/30 rounded-2xl p-6 hover:gold-glow transition-all duration-300 text-center"
            >
              <Icon className="w-10 h-10 text-gold-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold gold-text mb-2">{feature.title}</h3>
              <p className="text-gold-500 text-sm">{feature.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GBXAU;