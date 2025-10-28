import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wallet, Bot, DollarSign, Coins, ArrowLeftRight } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Wallet,
      name: 'Wallet',
      path: '/products/wallet',
      description: 'Secure digital wallet for your gold investments',
      color: 'from-gold-600 to-gold-500',
    },
    {
      icon: Bot,
      name: 'Zara AI',
      path: '/products/zara-ai',
      description: 'AI-powered investment assistant',
      color: 'from-gold-500 to-gold-400',
    },
    {
      icon: DollarSign,
      name: 'GBUSD',
      path: '/products/gbusd',
      description: 'Gold Bucks stablecoin pegged to USD',
      color: 'from-gold-600 to-gold-400',
    },
    {
      icon: Coins,
      name: 'GBXAU',
      path: '/products/gbxau',
      description: 'Gold-backed digital token',
      color: 'from-gold-500 to-gold-300',
    },
    {
      icon: ArrowLeftRight,
      name: 'Swap System',
      path: '/products/swap-system',
      description: 'Exchange tokens instantly',
      color: 'from-gold-600 to-gold-500',
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
        Our Products
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gold-500 text-center text-lg mb-16 max-w-3xl mx-auto"
      >
        Explore our suite of blockchain-powered products designed to revolutionize your digital gold investment experience
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <Link key={index} to={product.path}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-morphism border border-gold-400/30 rounded-2xl p-8 hover:gold-glow transition-all duration-300 group cursor-pointer h-full"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold gold-text mb-3">{product.name}</h3>
                <p className="text-gold-500">{product.description}</p>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Products;