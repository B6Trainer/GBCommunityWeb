import { motion } from 'framer-motion';
import { DollarSign, Shield, TrendingUp, Zap } from 'lucide-react';

const GBUSD = () => {
  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <DollarSign className="w-20 h-20 text-gold-400 mx-auto mb-6 animate-glow" />
        <h1 className="text-5xl font-bold gold-embossed mb-4">GBUSD</h1>
        <p className="text-gold-500 text-lg max-w-2xl mx-auto">
          Gold Bucks stablecoin pegged 1:1 to USD for stable value storage
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-morphism border border-gold-400/30 rounded-3xl p-10 text-center mb-12 gold-glow"
      >
        <div className="text-gold-500 mb-2">Current Rate</div>
        <div className="text-7xl font-bold gold-embossed mb-4">1:1</div>
        <div className="text-gold-500">1 GBUSD = 1 USD</div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: 'Stable Value', text: 'Pegged to USD for consistent value' },
          { icon: TrendingUp, title: 'Secure Transactions', text: 'Blockchain-verified transfers' },
          { icon: Zap, title: 'Instant Transfers', text: 'Fast and efficient transactions' },
        ].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300 text-center"
            >
              <Icon className="w-12 h-12 text-gold-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold gold-text mb-3">{feature.title}</h3>
              <p className="text-gold-500">{feature.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GBUSD;