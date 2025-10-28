import { motion } from 'framer-motion';
import { Wallet as WalletIcon, Send, ArrowDownToLine, History } from 'lucide-react';

const Wallet = () => {
  return (
    <div className="pt-32 min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold gold-embossed text-center mb-16"
      >
        Your Wallet
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-morphism border border-gold-400/30 rounded-3xl p-10 text-center mb-12 gold-glow"
      >
        <WalletIcon className="w-16 h-16 text-gold-400 mx-auto mb-4" />
        <div className="text-gold-500 mb-2">Total Balance</div>
        <div className="text-7xl font-bold gold-embossed mb-8">$0.00</div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-center space-x-2 px-6 py-3 glass-morphism border border-gold-400 gold-text rounded-lg hover:bg-gold-400/20 transition-smooth">
            <Send className="w-5 h-5" />
            <span>Send</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-3 glass-morphism border border-gold-400 gold-text rounded-lg hover:bg-gold-400/20 transition-smooth">
            <ArrowDownToLine className="w-5 h-5" />
            <span>Receive</span>
          </button>
          <button className="flex items-center justify-center space-x-2 px-6 py-3 glass-morphism border border-gold-400 gold-text rounded-lg hover:bg-gold-400/20 transition-smooth">
            <History className="w-5 h-5" />
            <span>History</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="glass-morphism border border-gold-400/30 rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold gold-text mb-6">Recent Transactions</h2>
        <div className="text-center py-12 text-gold-500">
          <p>No transactions yet</p>
          <p className="text-sm mt-2">Your transaction history will appear here</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Wallet;