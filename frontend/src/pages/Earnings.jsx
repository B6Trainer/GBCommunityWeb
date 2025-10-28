import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, Award } from 'lucide-react';

const Earnings = () => {
  const earningTypes = [
    {
      icon: DollarSign,
      title: 'Direct Earnings',
      amount: '$0.00',
      description: 'Earnings from your direct investments',
    },
    {
      icon: Users,
      title: 'Referral Earnings',
      amount: '$0.00',
      description: 'Commissions from referred users',
    },
    {
      icon: TrendingUp,
      title: 'Passive Income',
      amount: '$0.00',
      description: 'Monthly passive returns from nodes',
    },
    {
      icon: Award,
      title: 'Bonus Earnings',
      amount: '$0.00',
      description: 'Special rewards and bonuses',
    },
  ];

  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-8"
      >
        Your Earnings
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-morphism border border-gold-400/30 rounded-3xl p-10 text-center mb-12 gold-glow"
      >
        <div className="text-gold-500 mb-2">Total Earnings</div>
        <div className="text-7xl font-bold gold-embossed mb-4">$0.00</div>
        <button className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-lg hover:from-gold-500 hover:to-gold-400 transition-smooth">
          Withdraw Funds
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {earningTypes.map((type, index) => {
          const Icon = type.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="glass-morphism border border-gold-400/30 rounded-2xl p-6 hover:gold-glow transition-all duration-300"
            >
              <Icon className="w-10 h-10 text-gold-400 mb-4" />
              <h3 className="text-lg font-bold gold-text mb-2">{type.title}</h3>
              <div className="text-3xl font-bold text-gold-400 mb-2">{type.amount}</div>
              <p className="text-gold-500 text-sm">{type.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Earnings;