import { motion } from 'framer-motion';
import { ArrowLeftRight, Zap, Shield, Percent } from 'lucide-react';
import { useState } from 'react';

const SwapSystem = () => {
  const [fromToken, setFromToken] = useState('GBUSD');
  const [toToken, setToToken] = useState('GBXAU');
  const [amount, setAmount] = useState('');

  return (
    <div className="pt-32 min-h-screen max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <ArrowLeftRight className="w-20 h-20 text-gold-400 mx-auto mb-6 animate-float" />
        <h1 className="text-5xl font-bold gold-embossed mb-4">Swap System</h1>
        <p className="text-gold-500 text-lg max-w-2xl mx-auto">
          Exchange your tokens instantly with our secure swap system
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="glass-morphism border border-gold-400/30 rounded-3xl p-10 mb-12 gold-glow"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-gold-400 mb-3 font-medium">From</label>
            <div className="glass-morphism border border-gold-400/30 rounded-xl p-4">
              <select
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                className="w-full bg-transparent gold-text outline-none text-lg mb-2"
              >
                <option value="GBUSD">GBUSD</option>
                <option value="GBXAU">GBXAU</option>
              </select>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-transparent gold-text outline-none text-3xl font-bold"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <button className="w-12 h-12 rounded-full glass-morphism border border-gold-400 flex items-center justify-center hover:bg-gold-400/20 transition-smooth">
              <ArrowLeftRight className="text-gold-400" />
            </button>
          </div>

          <div>
            <label className="block text-gold-400 mb-3 font-medium">To</label>
            <div className="glass-morphism border border-gold-400/30 rounded-xl p-4">
              <select
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
                className="w-full bg-transparent gold-text outline-none text-lg mb-2"
              >
                <option value="GBXAU">GBXAU</option>
                <option value="GBUSD">GBUSD</option>
              </select>
              <div className="text-3xl font-bold gold-text">0.00</div>
            </div>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-black font-bold text-lg rounded-xl hover:from-gold-500 hover:to-gold-400 transition-smooth gold-glow">
            Swap Tokens
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: Zap, title: 'Instant Swaps', text: 'Exchange tokens in seconds' },
          { icon: Shield, title: 'Secure', text: 'Blockchain-verified transactions' },
          { icon: Percent, title: 'Low Fees', text: 'Competitive exchange rates' },
        ].map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="glass-morphism border border-gold-400/30 rounded-2xl p-6 hover:gold-glow transition-all duration-300 text-center"
            >
              <Icon className="w-10 h-10 text-gold-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold gold-text mb-2">{feature.title}</h3>
              <p className="text-gold-500 text-sm">{feature.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SwapSystem;