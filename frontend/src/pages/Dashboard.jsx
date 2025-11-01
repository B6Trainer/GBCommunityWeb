import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Wallet, Users } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Wallet, label: 'Total Balance', value: '$0.00', color: 'from-gold-600 to-gold-500' },
    { icon: TrendingUp, label: 'Total Earnings', value: '$0.00', color: 'from-gold-500 to-gold-400' },
    { icon: Users, label: 'Referrals', value: '0', color: 'from-gold-600 to-gold-400' },
    { icon: BarChart3, label: 'Active Nodes', value: '0', color: 'from-gold-500 to-gold-300' },
  ];

  return (
    <div className="pt-32 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-16"
        data-testid="dashboard-title"
      >
        Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-morphism border border-gold-400/30 rounded-2xl p-6 hover:gold-glow transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-black" />
              </div>
              <div className="text-gold-500 text-sm mb-1">{stat.label}</div>
              <div className="text-3xl font-bold gold-text">{stat.value}</div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="glass-morphism border border-gold-400/30 rounded-2xl p-8 text-center"
      >
        <h2 className="text-2xl font-bold gold-text mb-4">Welcome to Your Dashboard</h2>
        <p className="text-gold-500 mb-6">Start investing to see your portfolio grow</p>
        <button className="px-8 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold rounded-lg hover:from-gold-500 hover:to-gold-400 transition-smooth gold-glow">
          Start Investing
        </button>
      </motion.div>
    </div>
  );
};

export default Dashboard;